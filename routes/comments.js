const { Comment } = require('../db/models');
const { asyncHandler } = require('../utils');
const { requireAuth } = require('../auth');

const express = require('express');

const router = express.Router();

router.post('/:songId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const songId = req.params.id
    const userId = req.user.id;
    const { contentBody } = req.body;
    await Comment.create({ songId, userId, contentBody });
    res.status(200);
}));

//  Triggered by a delete button that only renders if the current user from req.user is the same as the userId of the comment
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const cimment = await Comment.findByPk(req.params.id);
    await Comment.destroy();
    res.status(200);
}))

module.exports = router