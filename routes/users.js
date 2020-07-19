const { User } = require("../db/models");
const { apiPort } = require("../config");
const { loggedInUser, requireAuth, generateUserToken } = require("../auth");
const {
  asyncHandler,
  handleValidationErrors,
  signUpValidation,
  editUserValidations,
  getS3Url,
} = require("../utils");

const pug = require("pug");
const path = require("path");
const express = require("express");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const { awsKeys } = require("../config");

const router = express.Router();
router.use(cookieParser());

const csrfProtection = csrf({ cookie: true });

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

// const getUser = async (userId) => {
//   // Change fetch url for heroku deployment
//   const userData = await fetch(`http://localhost:${apiPort}/users/${userId}`);
//   return await userData.json();
// };

// User sign up form action
router.post(
  "/",
  signUpValidation,
  handleValidationErrors,
  // upload.single("profilePic"),
  asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      username,
      hashedPassword,
      email,
      // profilePicUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    //Give User token

    const token = generateUserToken(user);

    res.json(token);
  })
);

// Renders a user edit form
router.get("/:id(\\d+)/edit", requireAuth, (req, res) => {
  const authenticatedId = req.user.id;
  const userId = parseInt(req.params.id, 10);
  console.log(authenticatedId, userId);
  if (userId !== authenticatedId) res.redirect("/");
  const user = req.user;

  const editUser = pug.compileFile(
    path.join(express().get("views"), "user-edit.pug")
  );
  res.send(
    editUser({
      user,
    })
  );
});

// User profile edit form action
router.post(
  "/:id(\\d+)",
  requireAuth,
  editUserValidations,
  handleValidationErrors,
  // csrfProtection,
  asyncHandler(async (req, res) => {
    console.log("we here");
    const userId = parseInt(req.params.id, 10);
    if (userId !== req.user.id) {
      res.redirect("/");
      return;
    }

    const user = await User.findByPk(userId);

    const { username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);

    user.username = username;
    user.hashedPassword = hashedPassword;
    user.email = email;

    //error here when saving instance
    await user.save();

    res.redirect("/");
  })
);

router.post(
  "/:id(\\d+)/profile",
  requireAuth,
  upload.single("profilePicUrl"),
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    if (userId !== req.user.id) {
      res.redirect("/");
      return;
    }
    console.log(req);
    const user = await User.findByPk(userId);
    const profilePicUrl = req.file.key;
    user.profilePicUrl = profilePicUrl;
    await user.save();
    res.redirect("/");
  })
);

router.post(
  "/:id(\\d+)/background",
  requireAuth,
  upload.single("backgroundUrl"),
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    if (userId !== req.user.id) {
      res.redirect("/");
      return;
    }
    console.log(req);
    const user = await User.findByPk(userId);
    const backgroundUrl = req.file.key;
    user.backgroundUrl = backgroundUrl;
    await user.save();
    res.redirect("/");
  })
);

router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    if (req.params.id !== req.user.id) redirect("/");
    const user = await getUser(req.params.id);
    user.destroy();
    req.status(200);
  })
);

module.exports = router;
