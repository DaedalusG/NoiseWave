const { User, Song, Like, Comment } = require("../db/models");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const { asyncHandler, modelNotFound, getS3Url } = require("../utils");
const Sequelize = require("../db/models/index").Sequelize;
const Op = Sequelize.Op;

// const fetch = require("node-fetch");
// const https = require("https");
// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });
const axios = require("axios");
const { apiPort } = require("../config/index");

const express = require("express");
const csrf = require("csurf");
const bcrypt = require("bcryptjs");
const pug = require("pug");
const path = require("path");
const { match } = require("assert");
const { S3 } = require("aws-sdk");
const song = require("../db/models/song");

const router = express.Router();

const csrfProtection = csrf({ cookie: true });
const userNotFound = modelNotFound("User");
const songNotFound = modelNotFound("Song");

// router.get("/", loggedInUser, (req, res) => {
//   if (req.user) res.redirect("/explore");
//   res.render("home");
// });

router.get("/",
  loggedInUser,
  asyncHandler(async (req, res) => {
    const songData = await Song.findAll({
      include: [{ model: User }],
    });
    //generate random user spotlight banner
    let spotlightData = songData[Math.floor(Math.random() * songData.length) - 1].dataValues;
    let spotProfKey = await getS3Url(spotlightData.User.profilePicUrl);
    let spotBackgroundKey = await getS3Url(spotlightData.User.backgroundUrl)
    let spotMusic = await getS3Url(spotlightData.songUrl);
    console.log(spotMusic);

    //generates a row of six random songs
    const sixSongs = [];
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * songData.length) - 1;
      sixSongs.push(songData[random].dataValues);
    }
    for (let song of sixSongs) {
      let profKey = song.User.dataValues.profilePicUrl;
      const music = await getS3Url(song.songUrl);
      song.music = music;
      let profPic = await getS3Url(profKey);
      song.User.dataValues.profilePicUrl = profPic;
    }

    res.render("templates/ajaxLayout.pug", { user: req.user, sixSongs, spotlightData, spotProfKey, spotBackgroundKey, spotMusic });
  }));

// router.get("/explore", loggedInUser, (req, res) => {
//   // TODO: get all relevant songs from the API and send them to the view
//   console.log(req.user);
//   res.render("explore", { user: req.user });
// });

router.get(
  "/explore",
  loggedInUser,
  asyncHandler(async (req, res) => {
    //Generate Array of 6 newest songs
    const dataById = await Song.findAll({
      limit: 6,
      include: [{ model: User }],
      order: [["id", "DESC"]],
    });
    const sixNewSongs = [];
    for (let i = 0; i < 6; i++) {
      sixNewSongs.push(dataById[i].dataValues);
    }
    for (let song of sixNewSongs) {
      let profKey = song.User.dataValues.profilePicUrl;
      const music = await getS3Url(song.songUrl);
      song.music = music;
      let profPic = await getS3Url(profKey);
      song.User.dataValues.profilePicUrl = profPic;
    }

    //Generate Array of 6 hip-hop Song Objects
    const rockData = await Song.findAll({
      include: [{ model: User }],
      where: { genre: "Rock" },
    });
    const sixRockSongs = [];
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * rockData.length) - 1;
      sixRockSongs.push(rockData[random].dataValues);
    }
    for (let song of sixRockSongs) {
      let profKey = song.User.dataValues.profilePicUrl;
      const music = await getS3Url(song.songUrl);
      song.music = music;
      let profPic = await getS3Url(profKey);
      song.User.dataValues.profilePicUrl = profPic;
    }

    //Generate Array of 6 random Song objects
    const songData = await Song.findAll({
      include: [{ model: User }],
    });
    const sixSongs = [];
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * songData.length) - 1;
      sixSongs.push(songData[random].dataValues);
    }
    for (let song of sixSongs) {
      let profKey = song.User.dataValues.profilePicUrl;
      const music = await getS3Url(song.songUrl);
      song.music = music;
      let profPic = await getS3Url(profKey);
      song.User.dataValues.profilePicUrl = profPic;
    }

    const ajaxExplore = pug.compileFile(
      path.join(express().get("views"), "explore.pug")
    );
    res.send(
      ajaxExplore({ user: req.user, sixSongs, sixRockSongs, sixNewSongs })
    );
  })
);

router.get(
  "/upload",
  loggedInUser,
  asyncHandler((req, res) => {
    const upload = pug.compileFile(
      path.join(express().get("views"), "upload.pug")
    );
    res.send(upload({ user: req.user }));
  })
);

router.get(
  "/search/:query",
  loggedInUser,
  asyncHandler(async (req, res) => {
    const { query } = req.params;

    const matchingUsers = await User.findAll({
      where: {
        username: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    const matchingSongs = await Song.findAll({
      include: [{ model: User }],
      where: {
        [Op.or]: {
          title: {
            [Op.iLike]: `%${query}%`,
          },
          artist: {
            [Op.iLike]: `%${query}%`,
          },
          // album: {
          //   [Op.iLike]: `%${query}%`,
          // },
          // genre: {
          //   [Op.iLike]: `%${query}%`,
          // },
        },
      },
    });

    for (let i = 0; i < matchingSongs.length; i++) {
      let song = matchingSongs[i];
      const profilePicKey = song.User.profilePicUrl;
      const musicKey = song.songUrl;

      if (profilePicKey) {
        const songPic = await getS3Url(profilePicKey);
        song.pic = songPic;
      }
      const music = await getS3Url(musicKey);

      song.music = music;
    }

    for (let i = 0; i < matchingUsers.length; i++) {
      let user = matchingUsers[i];

      const profilePicKey = user.profilePicUrl;
      const backgroundPicKey = user.backgroundUrl;

      if (profilePicKey) {
        const profilePic = await getS3Url(profilePicKey);
        user.profilePic = profilePic;
      }
      if (backgroundPicKey) {
        const backgroundPic = await getS3Url(backgroundPicKey);
        user.background = backgroundPic;
      }
    }

    // console.log(matchingUsers[1]);
    // console.log(matchingSongs[0]);

    const searchResults = pug.compileFile(
      path.join(express().get("views"), "search-results.pug")
    );
    res.send(
      searchResults({
        user: req.user,
        matchingSongs,
        matchingUsers,
      })
    );
  })
);

router.get(
  "/:username",
  loggedInUser,
  asyncHandler(async (req, res, next) => {
    const { username } = req.params;

    if (
      username === "login" ||
      username === "search" ||
      username === "explore" ||
      username === /\w+\/\w+/ ||
      username === "test:song" ||
      username === "audio-test" ||
      username === "imagetest" ||
      username === ""
    ) {
      next();
      return;
    }
    const userData = await User.findOne({
      include: [{ model: Song }, { model: Like }],
      where: { username: username },
    });

    for (let song of userData.Songs) {
      song.music = await getS3Url(song.songUrl);
    }

    if (!userData) {
      next(userNotFound());
    }

    let user = {};
    if (req.user) user = req.user;

    // const likedSongs = userData.Like.map(async (like) => {
    //   return await Song.findOne({
    //     include: [{ model: User }],
    //     where: { id: like.songId },
    //   });
    // });
    if (userData.profilePicUrl) {
      userData.profilePic = await getS3Url(userData.profilePicUrl);
    }
    if (userData.backgroundUrl) {
      userData.backgroundPic = await getS3Url(userData.backgroundUrl);
    }
    const userPage = pug.compileFile(
      path.join(express().get("views"), "user-page.pug")
    );
    res.send(userPage({ user, userData }));
  })
);

//song !== edit
router.get(
  "/:username/:song",
  loggedInUser,
  asyncHandler(async (req, res) => {
    if (req.params.username === "search" || req.params.song === "edit") {
      next();
      return;
    }
    const { song } = req.params.song;

    const songData = await Song.findOne({
      include: [{ model: User }, { model: Comment }, { model: Like }],
      where: { songLocalPath: req.params.song },
    });
    // res.render("song-page", { songData, currentUser: req.user });
    // const songPage = pug.compileFile(
    // path.join(express().get("views"), "song-page.pug")
    // );
    // res.send(songPage({ user: req.user, songData }));
    songData.songUrl = await getS3Url(songData.songUrl);
    songData.User.profilePicUrl = await getS3Url(songData.User.profilePicUrl);
    songData.User.backgroundUrl = await getS3Url(songData.User.backgroundUrl);
    // res.render('audiofile', { songData })

    const songPage = pug.compileFile(
      path.join(express().get("views"), "audiofile.pug")
    );
    res.send(songPage({ user: req.user, songData }));
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

//Ben's song page test
// router.get('/test:song', asyncHandler(async (req, res) => {
//   const { song } = req.query;
//   const songData = await Song.findOne({
//       include: User,
//       where: { songLocalPath: song },
//     });
//   // if(songData.User.username !== req.params.username) {
//   //   next(songNotFound());
//   // }
//   songData.songUrl = await getS3Url(songData.songUrl)
//   songData.User.profilePicUrl = await getS3Url(songData.User.profilePicUrl);
//   res.render('audiofile', { songData })
// }))

module.exports = router;
