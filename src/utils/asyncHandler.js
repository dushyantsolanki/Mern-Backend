const asyncHandler = (func) => {
  return async (req, res, next) => {
    try {
      func(req, res);
    } catch (error) {
      console.log("Error :: utils / ayncHandler.js :: ", error);
      next();
    }
  };
};

export { asyncHandler };
