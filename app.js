const { environment, awsKeys } = require("./config");
const indexRoutes = require("./routes/index");
const songRoutes = require("./routes/songs");
const userRoutes = require("./routes/users");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();
app.set("view engine", "pug");
app.set("case sensitive routing", true);
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
// app.use(cors({ origin: "localhost:4000" }));
app.use(cors({ origin: "noisewave.s3.us-west-2.amazonaws.com/" }));

// app.use("case sensitive routing", true);

app.use("/", indexRoutes);
app.use("/songs", songRoutes);
app.use("/users", userRoutes);

const { getS3Image } = require('./utils')

// middleware to catch errors caused by unhandled requests
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// user-friendly error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.render("error", {
    user: req.user,
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
