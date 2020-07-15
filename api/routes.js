const { User, Song } = require("../db/models");
// const db = require("../db/models/index");
// const { Op } = db.Sequelize;
const Sequelize = require("../db/models/index").Sequelize;
const Op = Sequelize.Op;

const {
  asyncHandler,
  modelNotFound,
  handleValidationErrors,
} = require("../utils");

const userNotFound = modelNotFound("User");
const songNotFound = modelNotFound("Song");

const express = require("express");

const router = express.Router();

router.get(
  "/users/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId, { include: ["Likes", "Songs"] });
    if (!user) {
      next(userNotFound());
      return;
    } else {
      return res.json({ user });
    }
  })
);

router.get(
  "/songs/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId, {
      include: ["Users", "Likes", "Comments"],
    });
    if (!song) {
      next(songNotFound());
      return;
    } else {
      return res.json({ song });
    }
  })
);

router.delete(
  "/songs/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId);
    if (!song) {
      next(songNotFound());
      return;
    } else {
      await song.destroy();
      res.status(200);
    }
  })
);

router.put(
  "/songs/:id(\\d+)",
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId);
    if (!song) {
      next(songNotFound());
      return;
    }
    // TODO add editing thumbnail image with s3
    const { title, artist, album, genre } = req.body;
    song.title = title;
    song.artist = artist;
    song.album = album;
    song.genre = genre;
    await song.save();
    return res.json(song);
  })
);

router.get(
  "/search/users/:string",
  asyncHandler(async (req, res) => {
    const query = req.params.string;

    const matchingUsers = await User.findAll({
      where: {
        username: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    return res.json(matchingUsers);
  })
);

router.get(
  "/search/songs/:string",
  asyncHandler(async (req, res) => {
    const query = req.params.string;

    const matchingSongs = await Song.findAll({
      where: {
        [Op.or]: {
          title: {
            [Op.iLike]: `%${query}%`,
          },
          artist: {
            [Op.iLike]: `%${query}%`,
          },
          album: {
            [Op.iLike]: `%${query}%`,
          },
          genre: {
            [Op.iLike]: `%${query}%`,
          },
        },
      },
    });
    return res.json(matchingSongs);
  })
);

module.exports = router;
