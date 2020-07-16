const { environment, awsKeys } = require("./config");
const indexRoutes = require("./routes/index");
const songRoutes = require("./routes/songs");
const userRoutes = require("./routes/users");

const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use("/", indexRoutes);
app.use("/songs", songRoutes);
app.use("/users", userRoutes);

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
    bucket: "noisewave",
    // metadata: function (req, file, cb) {
    //   cb(null, { fieldName: file.fieldname });
    // },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

//example route handler to post file
app.post("/post_file", upload.single("to_s3"), function (req, res, next) {
  res.send({ success: true });
});

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
    user: req.user,
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
