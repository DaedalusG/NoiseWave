const { User, Song, Like } = require("../db/models");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const { asyncHandler, modelNotFound } = require("../utils");

// const fetch = require("node-fetch");
// const https = require("https");
// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });
const axios = require("axios");

const express = require("express");
const csrf = require("csurf");
const bcrypt = require("bcryptjs");
const pug = require("pug");
const path = require("path");

const router = express.Router();

const csrfProtection = csrf({ cookie: true });
const userNotFound = modelNotFound("User");

// router.get("/", loggedInUser, (req, res) => {
//   if (req.user) res.redirect("/explore");
//   res.render("home");
// });

router.get("/", loggedInUser, (req, res) => {
  res.render("templates/ajaxLayout.pug", { user: req.user });
});

// router.get("/explore", loggedInUser, (req, res) => {
//   // TODO: get all relevant songs from the API and send them to the view
//   console.log(req.user);
//   res.render("explore", { user: req.user });
// });

router.get(
  "/explore",
  loggedInUser,
  asyncHandler((req, res) => {
    const ajaxExplore = pug.compileFile(
      path.join(express().get("views"), "explore.pug"),
      { user: req.user }
    );
    res.send(ajaxExplore());
  })
);

router.get(
  "/upload",
  loggedInUser,
  asyncHandler((req, res) => {
    const upload = pug.compileFile(
      path.join(express().get("views"), "upload.pug"),
      { user: req.user }
    );
    res.send(upload());
  })
);

router.get(
  "/search/:query",
  loggedInUser,
  asyncHandler(async (req, res) => {
    //made event handler that leads to this route. whatever was search is in params
    const { query } = req.params;
    console.log(query);
    //BOTH OF THESE API CALLS MUST BE UPDATED IF WE ARE USING PRODUCTION ENV
    const resUsers = await axios.get(
      `http://localhost:4000/search/users/${query}`
    );

    const matchingUsersArr = resUsers.data;

    const resSongs = await axios.get(
      `http://localhost:4000/search/songs/${query}`
    );

    const matchingSongsArr = resSongs.data;

    console.log(matchingUsersArr);
    res.render("search-results", {
      user: req.user,
      matchingSongsArr,
      matchingUsersArr,
    });

    const searchResults = pug.compileFile(
      path.join(express().get("views"), "search-results.pug"),
      {
        user: req.user,
        matchingSongsArr,
        matchingUsersArr,
      }
    );
    res.send(searchResults());
  })
);

//the username search !== (search,upload,explore)
router.get(
  "/:username",
  loggedInUser,
  asyncHandler(async (req, res, next) => {

    const { username } = req.params;
    if (username !== 'login' || username !== 'search' ||username !== 'explore') {
      next();
      return;
    }
    const userData = await User.findOne({
      include: [{ model: Song }, { model: Like }],
      where: { username: username },
    });

    if (!userData) {
      next(userNotFound());
    }
    res.render("user-page", { userData, user: req.user });
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
