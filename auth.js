// What needs to be authenticated?
// -Users

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

const authenticateToken = (req, res, next) => {
  //grab token from request
  const { token } = req;

  if (!token) {
    return res.sendStatus(401);
  }
};

//FOR BACKEND API CALL we supply the jwt, for frontend, the user supplies the jwt

const restoreUser = (req, res, next) => {
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
      req.user = await User.findbyPk(id);
    } catch (err) {
      return next(err);
    }

    if (!req.user) {
      return res.set("WWW-authenticate", "Bearer").status(401).end();
    }
    return next;
  });
};

// THIS IS WHAT THE SIGNUP POST ROUTE SHOULD LOOK LIKE IN THE ROUTE FOLDER
//this route encrypts the password, creates the new user, creates a token for that user, and sends the token in the repons to user.

// router.post(
//   "/users",
//   validateUsername,
//   validateEmailAndPassword,
//   handleValidationErrors,
//   asyncHandler(async (req, res) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ username, email, hashedPassword });

//     const token = generateUserToken(user);
//     res.status(201);

//     //This part im not sure, we want to give the client the token created and redirect them??
//     res.token = token;
//     res.redirect("I DONT KNOW");
//   })
// );

const requireAuth = [bearerToken(), restoreUser];
module.exports = {
  generateUserToken,
  requireAuth,
};
