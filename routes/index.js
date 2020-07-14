const express = require("express");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { User } = require("../db/models");
const { generateUserToken } = require("../auth");
const bcrypt = require("bcryptjs");

const router = express.Router();

console.log("using index router");

router.get("/", (req, res) => {
  res.render("home");
});

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findAll({
      where: {
        username,
      },
    });
    console.log(user);

    let validPassword = false;
    if (user) {
      validPassword = bcrypt.compareSync(password, user.hashedPassword);
    }

    console.log(validPassword);

    if (!user || !validPassword) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    } else {
      const token = generateUserToken(user);
      localStorage.setItem("NOISEWAVE_ACCESS_TOKEN", token);

      res.redirect("/explore");
    }
  })
);

module.exports = router;
