const { Song } = require("../db/models");
const { apiPort } = require("../config");
const { asyncHandler, handleValidationErrors } = require("../utils");

const express = require("express");

const router = express.Router();
console.log("using songs router");

router.post(
  "/",
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    // TODO handle upload of mp3 and image files to s3
    // TODO get the id of the logged in user
    const { title, artist, album, genre } = req.body;
    await Song.create({ title, artist, album, genre });
    res.status(200);
    res.redirect("/discover");
  })
);

router.post('/:id(\\d+)/edit', asyncHandler(async (req, res) => {
    const { title, artist, album, genre } = req.body;
    await fetch(`http://localhost:${apiPort}/songs/${req.params.id}`, 
                {method: 'PUT',
                body: { title, artist, album, genre }});
}));

module.exports = router;
