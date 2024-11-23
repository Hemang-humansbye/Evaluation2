// utils/errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || "Something went wrong";
  
    res.status(statusCode).json({
      message,
    });
  };
  
  module.exports = errorHandler;
  