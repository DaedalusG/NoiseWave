const { User, Song, Like } = require("../db/models");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const { asyncHandler, modelNotFound } = require("../utils");

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

router.get("/search?=:string", loggedInUser, (req, res) => {
  //made event handler that leads to this route. whatever was search is in params

  const query = req.params.string;

  // const fetchSongs= await fetch().....
  //run query through search api for users
  //run query through search api for songs

  //then
  //const matchingUsers = await res.json()
  //const matchingSongs = await res.json()
  //plug in these 2 to render

  res.render("search-results", {
    user: req.user,
    search: req.query,
    test: "THIS IS A TEST",
  });
});

//the username search !== (search,upload,explore)
router.get(
  "/:username(\\w+)",
  loggedInUser,
  asyncHandler(async (req, res, next) => {
    const { username } = req.params;
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
      include: ["User", "Like", "Comment"],
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
