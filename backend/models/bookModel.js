const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
