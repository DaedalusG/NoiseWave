const { Song } = require("../db/models");
const { apiPort } = require("../config");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const express = require("express");

const router = express.Router();

const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const { awsKeys } = require('../config');

//setting AWS credentials and initializing aws-sdk object instance
// remember to import keys from config: const { awsKeys } = require('./config');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsKeys.IAM_ACCESS_ID;
AWS.config.secretAccessKey = awsKeys.IAM_SECRET;
const S3 = new AWS.S3();

//setting up direct stream to s3 bucket using multer and multer-s3
const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: 'noisewave',
    key: function (req, file, cb) {
      //console.log('testy string')
      //console.log(file);
      cb(null, `${new Date()}${file.originalname}`)
    }
  })
})

router.post(
  "/",
  requireAuth,
   handleValidationErrors,
  upload.single('songUrl'),
  asyncHandler(async (req, res) => {
    console.log(req.file)
    const { title, artist, album, genre } = req.body;
    const songUrl = req.file.location
    //the file in song url, and the thumbnail need to be sourced to s3
    // TODO handle upload of mp3 and image files to s3
    // TODO get the id of the logged in user
    const userId = req.user.id;
    if (!title || !songUrl) {
      res.status(400);
      res.redirect("/explore");
      return;
    }

    await Song.create({ title, artist, album, genre, songUrl, userId });
    res.status(200);
    res.redirect(`/${req.user.username}`);
  })
);

router.get(
  "/:id(\\d+)/edit",
  requireAuth,
  asyncHandler(async (req, res) => {
    const authenticatedId = req.user.id;
    const songId = parseInt(req.params.id, 10);

    const song = await Song.findByPk(songId);
    const songOwner = song.userId;

    if (songOwner !== authenticatedId) res.redirect("/");
    const user = req.user;
    res.render("song-edit", { song, user });
  })
);

router.put(
  "/songs/:id(\\d+)",
  requireAuth,
  //NEEDS VALIDATORS, SEE UTIL.JS songCheck
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const songId = parseInt(req.params.id);

    const song = await Song.findByPk(songId);

    const {
      id,
      title,
      artist,
      album,
      genre,
      songUrl,
      userId,
    } = req.body;
    if (req.user.id !== userId || songId !== id) {
      res.redirect("/");
      return;
    }
    //the file in song url, and the thumbnail need to be sourced to s3
    // TODO add editing thumbnail image with s3
    song.title = title;
    song.artist = artist;
    song.album = album;
    song.genre = genre;
    song.songUrl = songUrl;
    if (thumbnailUrl) song.thumbnailUrl = thumbnailUrl;

    await song.save();
    return res.json(song);
  })
);

module.exports = router;
