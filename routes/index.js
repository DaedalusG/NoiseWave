const { User, Song } = require("../db/models");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const { asyncHandler } = require("../utils");

// const fetch = require("node-fetch");
// const https = require("https");
// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });
const axios = require("axios");

const express = require("express");
const csrf = require("csurf");
const bcrypt = require("bcryptjs");

const router = express.Router();

const csrfProtection = csrf({ cookie: true });

router.get("/", loggedInUser, (req, res) => {
  if (req.user) res.redirect("/explore");
  res.render("home");
});

router.get("/explore", loggedInUser, (req, res) => {
  // TODO: get all relevant songs from the API and send them to the view
  res.render("explore", { user: req.user });
});

router.get("/upload", requireAuth, (req, res) => {
  // res.render('upload', {csrfToken: req.csrfToken()})
  res.render("upload", { user: req.user });
});

router.get(
  "/search/:string",
  loggedInUser,
  asyncHandler(async (req, res) => {
    //made event handler that leads to this route. whatever was search is in params

    const query = req.params.string;

    //BOTH OF THESE API CALLS MUST BE UPDATED IF WE ARE USING PRODUCTION ENV
    const resUsers = await axios.get(
      `http://localhost:4000/search/users/${query}`
    );

    const matchingUsersArr = resUsers.data;

    const resSongs = await axios.get(
      `http://localhost:4000/search/songs/${query}`
    );

    const matchingSongsArr = resSongs.data;

    res.render("search-results", {
      user: req.user,
      matchingSongsArr,
      matchingUsersArr,
    });
  })
);

//the username search !== (search,upload,explore)
router.get(
  "/:username(?!search)(?!explore)(?!upload)",
  loggedInUser,
  asyncHandler(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({
      include: ["Songs", "Likes"],
      where: { username: username },
    });
    res.render("user-page", { user, currentUser: req.user });
  })
);

//song !== edit
router.get(
  "/:username(\\w+)/:song(\\w+)",
  loggedInUser,
  asyncHandler(async (req, res) => {
    const { song } = req.params;
    const songData = await Song.findOne({
      include: ["Users", "Likes", "Comments"],
      where: { title: song },
    });
    res.render("song-page", { songData, currentUser: req.user });
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });

    let validPassword = false;
    if (user) {
      validPassword = bcrypt.compareSync(
        password,
        user.hashedPassword.toString()
      );
    }

    if (!user || !validPassword) {
      res.ok = false;
      res.status(401);
      res.json({ message: "The provided credentials were invalid." });
    } else {
      const token = generateUserToken(user);

      res.json(token);
    }
  })
);

module.exports = router;
