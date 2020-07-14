const expressValidator = require("express-validator");
const { User } = require("./db/models");
const { check, validationResult } = expressValidator;

const asyncHandler = (handler) => (req, res, next) => {
  return returnhandler(req, res, next).catch(next);
};

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    return next(err);
  }
  next();
};

const modelNotFound = (model) => {
  return () => {
    const err = new Error(`The specified ${model} could not be found`);
    err.title = `${model} not found`;
    err.status = 404;
    return err;
  };
};

const signUpValidation = [
  check("username")
    .notEmpty()
    .withMessage("Username must be at least 1 character.")
    .isLength({ max: 100 })
    .withMessage("Username must be less than 100 characters")
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

module.exports = {
  asyncHandler,
  handleValidationErrors,
  modelNotFound,
  signUpValidation,
};
