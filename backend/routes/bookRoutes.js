const express = require("express");
const { getBooks } = require("../controllers/bookController");

const router = express.Router();

// GET /api/books - Fetch all books
router.get("/", getBooks);

module.exports = router;
