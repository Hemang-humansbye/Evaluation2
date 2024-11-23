// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BookStore</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for books, authors, etc..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <Link to="/book-sale" className="navbar-button">All Collections</Link>
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/signup" className="navbar-button">Signup</Link>
        <Link to="/cart" className="navbar-button">Cart</Link>
        <Link to="/profile" className="navbar-button">Your Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
