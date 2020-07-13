// What needs to be authenticated?
// -Users

//How?????
//-cookies or local storage with jwt

//What does authentication require?
//-valid user credentials from signing up or signing in

// What route to sign up?
// - .post('/users')

// What route to sign in?
// - I think it should be .post('/users/signin')

// When do we need to authenticate?
//- when user tries to do anything requiring authorization
//-user posts a comment
//-user posts a like
//-user post a song

// What/when do we need to authorize?
// -when user tries to get pages to edit song or user.
// - when user tries to edit song
// -when user tries to delete a song
// -when user tries to edit user
// -when user tries to delete user
//-user deletes a like

const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;

const { User } = require("./db/models");
const bearerToken = require("express-bearer-token");

const generateUserToken = (user) => {
  //DOES WHAT: generates a token for a user
  //WHEN TO RUN: run it during account creation, login, or token refreshing.
  //WHERE TO RUN IT: this should be ran in the signup and login routes. it can also be ran in a refresh middleware function.
  const userDataForToken = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  const token = jwt.sign({ data: userDataForToken }, secret, {
    expiresIn: parseInt(expiresIn, 10),
  });

  return token;
};

const refreshValidToken = (req, res, next) => {
  //DOES WHAT: refreshes a token if user has valid token already.
  //WHEN TO RUN: This is an optional middleware. If we want user to have their token refreshed with each request, we should run this middleware.
  //WHERE TO RUN IT: We would use this middleware on app.js; it is not route specific.
  const { token } = req;

  if (!token) {
    next();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      const user = await User.findByPk(id);
    } catch (err) {
      return next(err);
    }

    const token = generateUserToken(user);

    localStorage.setItem("NOISEWAVE_ACCESS_TOKEN", token);

    next();
  });
};
const refreshToken = [bearerToken(), refreshValidToken];

const authenticateUser = (req, res, next) => {
  //DOES WHAT: this function checks to see if a user has is logged in (has a token). If yes, it will pass on their user instance to req. If not, it will direct the user to login.
  //WHEN TO RUN: When it is necessary to have an authenticated, logged in user for a request.
  //WHERE TO RUN IT: this is a middleware. run it before route.

  const { token } = req;

  if (!token) {
    //TODO this should be redirect or prompt modal popup for login
    return res.set("WWW-authenticate", "Bearer").status(401).end();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      req.user = await User.findByPk(id);
    } catch (err) {
      return next(err);
    }

    if (!req.user) {
      //TODO this should be redirect or prompt modal popup for login
      return res.set("WWW-authenticate", "Bearer").status(401).end();
    }
    return next();
  });
};
const requireAuth = [bearerToken(), authenticateUser];

const isUserLoggedIn = (req, res, next) => {
  //DOES WHAT: this middleware checks if the user is logged in (has valid token). If they are, their instance is grabbed and passed in the req.
  //WHEN TO RUN: this middleware should be ran when we want to determine how to render a frontend page from a get request. We check who is logged in, and if it matches the id of
  // the get path for user or user songs we render it with extra stuff.           For example, if a user visits a profile page or
  //a user's songs page, we would run this and see if the person is logged in and the owner. if yes, we'd add links to edit account, or edit/add songs page(s).
  //WHERE TO RUN IT: it's a middleware, run before rendering pug to see if we need to render certain options/links for user.
  const { token } = req;

  if (!token) {
    req.user = null;
    next();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      const user = await User.findByPk(id);
      if (user !== null) {
        req.user = user;
      }
    } catch (err) {
      return next(err);
    }

    next();
  });
};

const loggedInUser = [bearerToken(), isUserLoggedIn];

const userIsAuthorized = (
  authenticatedUserFromReqObject,
  userSpecificiedByUrl
) => {
  //DOES WHAT: tells us if user is authorized by comparing what user the route is selecting and what route is authenticated.
  //WHEN TO RUN: Anytime specific authorization is required (see lines 16-29).
  //WHERE TO RUN IT: this would always be ran from within a route. TBH the function itself is overkill, BUT it explains how we'd do authorization.
  return authenticatedUserFromReqObject.id === userSpecificiedByUrl.id;
};

module.exports = {
  generateUserToken,
  requireAuth,
  refreshToken,
  loggedInUser,
  userIsAuthorized,
};
