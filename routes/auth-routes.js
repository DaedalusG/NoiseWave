const express = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("../db/models");
const router = express.Router();
const { generateUserToken, requireAuth } = require("../auth");
const asyncHandler = handler => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  }
}

// compare to ben's signup route
//this route encrypts the password, creates the new user, creates a token for that user, and sends the token.

router.post(
  "/users" /*VALIDATIONS,*/,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const token = generateUserToken(user);
    res.status(201).json({
      token,
    });
  })
);

//backend login validation
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
        //or username, our choice, as long as unique
      },
    });
    const validPassword = bcrypt.compareSync(
      password,
      user.hashedPassword.toString()
    );

    //if credentials invalid, it errors
    if (!user || !validPassword) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = generateUserToken(user);
    res.json({ token });
  })
);

//I think the logout will just be a logout button with event listener
// router.post("/logout", (req, res) => {});

//WITH THE CORRECT USER TOKEN, THIS WILL GRAB THE USERS INFO
router.get("/userinfo", requireAuth, (req, res) => {
  const user = req.user;
  res.json(user);
});

module.exports = router;
