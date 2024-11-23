const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/db");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON

// Database connection
connectDB();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API! Use /api/books to fetch books.");
});

// Routes
app.use("/api/books", bookRoutes);

// Error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
