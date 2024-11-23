import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import Navbar
import LoginPage from "./Components/Loginpage"; // Import Login Page
import SignUpPage from "./Components/SignUpPage"; // Import Signup Page
import Dashboard from "./Components/Dashboard"; // Import Dashboard
import HomePage from "./Components/HomePage"; // Import Home Page
import Page1 from "./Components/Page1"; // Import Page 1
import BookList from "./Components/BookList"; // Import Book Sale Page
import Book from "./Components/Book";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar will appear on all pages */}
        <Navbar />

        {/* Define application routes */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Signup page */}
          <Route path="/signup" element={<SignUpPage />} />

          {/* Dashboard (protected page) */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Page 1 */}
          <Route path="/page1" element={<Page1 />} />

          {/* Book Page */}
          <Route path="/book/:title" element={<Book />} />

          {/* Book Sale Page */}
          <Route path="/book-sale" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
