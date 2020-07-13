const express = require("express");
const morgan = require("morgan");
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();

app.get("/", (req, res) => {
  res.send(`Find me at localhost:8080`);
});

//start server with npm run start

module.exports = app;
