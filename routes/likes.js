const { Like } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('../utils')

const express = require('express');

const router = express.Router();


// Post and delete routes will be called using AJAX in an event handler for a like button on a song's page
router.post('/:songId', requireAuth, asyncHandler(async (req, res) => {
    await Like.create({songId: req.params.songId, userId: req.user.id});
    res.status(200);
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const like = Like.findByPk(req.params.id);

    like.destroy();
    res.status(200);
}));

module.exports = router;