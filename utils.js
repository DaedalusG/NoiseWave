const expressValidator = require("express-validator");
const { User } = require("./db/models");
const { check, validationResult } = expressValidator;

// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const AWS = require("aws-sdk");
// const { awsKeys } = require('./config');

const asyncHandler = (handler) => (req, res, next) => {
  return handler(req, res, next).catch(next);
};

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);
    res.ok = false;
    res.status(401);
    res.json(errors);
    return;
    // const err = Error("BAD request.");
    // err.errors = errors;
    // err.status = 400;
    // err.title = "BAD request.";
    // return next(err);
  }
  next();
};

const modelNotFound = (model) => {
  return () => {
    const err = new Error(`The Specified ${model} could not be found`);
    err.title = `${model} not found`;
    err.status = 404;
    return err;
  };
};

// const loginValidation = [
//   check('username')
//     .notEmpty().withMessage('PLease enter a username')
// ]

const signUpValidation = [
  check("username")
    .notEmpty()
    .withMessage("Username must be at least 1 character.")
    .isLength({ max: 100 })
    .withMessage("Username must be less than 100 characters")
    .custom((value) => !/\s/.test(value))
    .withMessage("No spaces are allowed in the username")
    .custom(async (value) => {
      const inUse = await User.findAll({
        where: {
          username: value,
        },
      });

      if (inUse.length > 0) {
        throw new Error("That username is already in use.");
      } else return true;
    }),
  check("email")
    .isEmail()
    .withMessage("Not a valid email address")
    .isLength({ max: 255 })
    .withMessage("Email must be less than 255 characters")
    .custom(async (value) => {
      const inUse = await User.findAll({
        where: {
          email: value,
        },
      });

      if (inUse.length > 0) {
        throw new Error("That email is already in use.");
      } else return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Password must be at least 1 character.")
    .custom((value, { req }) => {
      if (req.body.confirmPassword !== value) {
        throw new Error("The password and confirmed password must match");
      } else return true;
    }),
];

const editUserValidations = [
  check("username")
    .notEmpty()
    .withMessage("Username must be at least 1 character.")
    .isLength({ max: 100 })
    .withMessage("Username must be less than 100 characters")
    .custom(async (value, { req }) => {
      const inUse = await User.findAll({
        where: {
          username: value,
        },
      });
      console.log(req.user.username);
      if (req.user.username !== value && inUse.length > 0) {
        throw new Error("That username is already in use.");
      } else return true;
    }),
  check("email")
    .isEmail()
    .withMessage("Not a valid email address")
    .isLength({ max: 255 })
    .withMessage("Email must be less than 255 characters")
    .custom(async (value, { req }) => {
      const inUse = await User.findAll({
        where: {
          email: value,
        },
      });

      if (req.user.email !== value && inUse.length > 0) {
        throw new Error("That email is already in use.");
      } else return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Password must be at least 1 character.")
    .custom((value, { req }) => {
      if (req.body.confirmPassword !== value) {
        throw new Error("The password and confirmed password must match");
      } else return true;
    }),
];

songCheck = [
  check("title").notEmpty().withMessage("Title cannot be empty"),
  check("songUrl"),
  //we want to check filetype, ask warren for help];
];

const AWS = require("aws-sdk");
const { awsKeys } = require("./config");

//setting AWS credentials and initializing aws-sdk object instance
// remember to import keys from config: const { awsKeys } = require('./config');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsKeys.IAM_ACCESS_ID;
AWS.config.secretAccessKey = awsKeys.IAM_SECRET;
const S3 = new AWS.S3();

const getS3Url = async (key) => {
  return S3.getSignedUrl("getObject", {
    Bucket: "noisewave",
    Key: key,
  });
};

const createLocalPath = (songTitle) => {
  const chars = songTitle.split("");
  const bannedUrlChars = "!@#$%^&*()`~{}[]\\|;:'=+\"_,<.>/?*";

  const path = chars.map((char) => {
    if (bannedUrlChars.includes(char)) {
      return "";
    } else if (char === " ") {
      return "-";
    } else return char;
  });

  return path.join("");
};

const attachPicAndAudiotoSong = async (song) => {
  try {
    const picKey = song.User.profilePicUrl;
    const audioKey = song.songUrl;

    const pic = await getS3Url(picKey);
    const audio = await getS3Url(audioKey);
    song.pic = pic;
    song.audio = audio;
  } catch (e) {
    console.log(e);
  }
};

const attachPicsToUser = async (user) => {
  try {
    const profilePicKey = user.profilePicUrl;
    const backgroundPicKey = user.backgroundUrl;
    console.log(profilePicKey);

    const profilePic = await getS3Url(profilePicKey);
    const backgroundPic = await getS3Url(backgroundPicKey);
    console.log(profilePic);
    user.profilePic = profilePic;
    user.backgroundPic = backgroundPic;
  } catch (e) {
    console.log(e);
  }
};

// console.log(createLocalPath(`*$#)@(*!_*@#)(&)*$&@*($&My favorite's son%g`));

module.exports = {
  getS3Url,
  asyncHandler,
  handleValidationErrors,
  modelNotFound,
  signUpValidation,
  editUserValidations,
  createLocalPath,
  attachPicAndAudiotoSong,
  attachPicsToUser,
};
