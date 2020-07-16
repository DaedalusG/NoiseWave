const { Song } = require("../db/models");
const { apiPort } = require("../config");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const express = require("express");

const router = express.Router();

router.post(
  "/",
  requireAuth,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { title, artist, album, genre, songUrl, thumbnailUrl } = req.body;
    //the file in song url, and the thumbnail need to be sourced to s3
    // TODO handle upload of mp3 and image files to s3
    // TODO get the id of the logged in user
    if (!title || !songUrl) {
      res.status(400);
      res.redirect("/explore");
      return;
    }
    await Song.create({ title, artist, album, genre });
    res.status(200);
    res.redirect("/discover");
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
      thumbnailUrl,
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
