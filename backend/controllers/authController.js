// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);  // 10 rounds of hashing

  // Create new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Save user to database
    await newUser.save();

    // Generate JWT token for the newly registered user
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,  // Use a secret key from your .env file
      { expiresIn: "1h" }  // Token expiration time (1 hour)
    );

    // Send token in response
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

module.exports = { register };
