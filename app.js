const { environment } = require("./config");
const indexRoutes = require("./routes/index");
const songRoutes = require("./routes/songs");
const userRoutes = require("./routes/users");

const express = require("express");
const morgan = require("morgan");
const multer = require('multer');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, 'images')));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use('/', indexRoutes);
app.use('/songs', songRoutes);
app.use('/users', userRoutes);

// middleware to catch errors caused by unhandled requests
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// user-frienndly error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.render("error", {
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
