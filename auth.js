// What needs to be authenticated?
// -Users

//How?????
//-cookies or local storage

//What does authentication require?
//-valid user credentials from signing up or signing in

// What route to sign up?
// - .post('/users')

// What route to sign in?
// - I think it should be .post('/users/signin')

// When do we need to authenticate?
// -when user adds a comment
// -when user adds a like
//- when user tries to do anything requiring authorization

// What/when do we need to authorize?
// - when user tries to edit song
// -when user tries to delete a song
// -when user tries to edit profile
// -when user tries to delete profile
// -user deletes a comment
//-user deletes a like

//once user created with bcrypt encryption...

const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;

const { User } = require("./db/models");
const bearerToken = require("express-bearer-token");

const generateUserToken = (user) => {
  //we pass in the user instance from db, this is ran when users are signing up

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

//this is an idea to refresh the token(authentication) on each app call. It would be a middleware. I'm not 100% it would work. But let's talk and see if we want to use it.
const refreshValidToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token;
  if (authHeader) {
    token = authHeader.split(" ")[1];
  }
  if (!token) {
    next();
  }

  jwt.verify(token, secret, null, async (err, jwtPayload) => {
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
    localStorage.setItem("NOISEWAVE_CURRENT_USER_ID", id);

    next();
  });
};

//this checks that the user is valid and grabs their user object.
const authenticateUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
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
      return res.set("WWW-authenticate", "Bearer").status(401).end();
    }
    return next();
  });
};

const requireAuth = [bearerToken(), authenticateUser];
module.exports = {
  generateUserToken,
  requireAuth,
  refreshValidToken,
};
