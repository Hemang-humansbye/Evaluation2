import React from "react";
import "../Styles/BookSalePage.css";

const BookCard = ({ book }) => {
  return (
    <a href={`./book/${book.title}`} className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>
        <span className="discounted-price">Rs.{book.discountedPrice}</span>{" "}
        <span className="original-price">Rs.{book.originalPrice}</span>
      </p>
    </a>
  );
};

export default BookCard;
