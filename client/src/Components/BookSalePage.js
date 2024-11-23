import React, { useEffect, useState } from "react";
import "../Styles/BookSalePage.css"; // Create a separate CSS file for this component

const BookSalePage = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/books") // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="book-sale-page">
      <h1>Book Sale</h1>
      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>
              <span className="price">${book.discountedPrice}</span>{" "}
              <span className="discount">${book.originalPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSalePage;
