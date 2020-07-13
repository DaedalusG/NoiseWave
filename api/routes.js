const { User, Song } = require('../db/models');
const { asyncHandler, modelNotFound, handleValidationErrors } = require('../utils');

const userNotFound = modelNotFound('User');
const songNotFound = modelNotFound('Song');

const express = require('express');

const router = express.Router();

router.get('/users/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId, { include: ['Like', 'Song'] });
    if(!user) {
        next(userNotFound());
        return;
    } else {
        return res.json({ user });
    }
}));

router.get('/songs/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId, { include: ['User', 'Like', 'Comment'] });
    if(!song) {
        next(songNotFound());
        return;
    } else {
        return res.json({ song });
    }
}));

router.delete('/songs/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId);
    if(!song) {
        next(songNotFound());
        return;
    } else {
        await song.destroy();
        res.status(200);
    }
}));

router.put('/songs/:id(\\d+)', handleValidationErrors, asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId);
    if(!song) {
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
}));

module.exports = router;