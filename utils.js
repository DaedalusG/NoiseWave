const asyncHandler = handler => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    }
}

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

const modelNotFound = model => {
    return () => {
        const err = new Error(`The specified ${model} could not be found`);
        err.title =  `${model} not found`;
        err.status = 404;
        return err;
    }
};
  
module.exports = {
    asyncHandler,
    handleValidationErrors,
    modelNotFound
}