const express = require("express");
const { asyncHandler, handleValidationErrors } = require("../utils");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post(
  "/login",
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
        //or username, our choice, as long as unique
      },
    });
    const validPassword = bcrypt.compareSync(
      password,
      user.hashedPassword.toString()
    );

    //This check should be in error validator.
    //if credentials invalid, it errors
    // if (!user || !validPassword) {
    //   const err = new Error("Login failed");
    //   err.status = 401;
    //   err.title = "Login failed";
    //   err.errors = ["The provided credentials were invalid."];
    //   return next(err);
    // }
    const token = generateUserToken(user);
    localStorage.setItem("NOISEWAVE_ACCESS_TOKEN", token);
  })
);

module.exports = router;
