const Book = require("../models/bookModel");

// @desc Get all books
// @route GET /api/books
// @access Public
const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find(); // Fetch all books
    res.status(200).json(books);
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};

module.exports = { getBooks };
