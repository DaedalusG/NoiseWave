const { User, Song } = require("../db/models");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const { asyncHandler } = require("../utils");

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
  console.log(req.user);
  res.render("explore", { user: req.user });
});

router.get("/upload", requireAuth, (req, res) => {
  // res.render('upload', {csrfToken: req.csrfToken()})
  res.render("upload", { user: req.user });
});

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
  "/:username",
  loggedInUser,
  asyncHandler(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({
      include: ["Song", "Like"],
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
