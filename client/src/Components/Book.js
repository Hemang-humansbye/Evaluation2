
import "../Styles/Page1.css"; // Import the CSS for Page 1
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";
import "../Styles/BookSalePage.css";


const Book = () => {
  const {title} = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        for(let book of response.data){
          if(book.title.match(title)){
            setBook(book);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error("Error fetching books:", error);  
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading books...</p>;
  }

  return (
    <div className="page1-container">
      <div className="breadcrumbs">
        <span>Home</span> &gt; <span>{book.title}</span>
      </div>

      <div className="content-wrapper">
        {/* Book Image */}
        <div className="book-image">
          <img
            src= {book.image}
            alt={book.title}
          />
        </div>

        {/* Book Details */}
        <div className="book-details">
          <h1>Title: {book.title}</h1>
          <p>Authour: <strong>{book.author}</strong></p>
          <p>Availability: <span className="in-stock">In Stock</span></p>
          <p>
            SKU: <strong>123</strong>
          </p>

          <div className="price">
            <span className="current-price">Rs.{book.discountedPrice}</span>
            <span className="original-price">Rs.{book.originalPrice}</span>
          </div>

          <p className="description">
          Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.
          </p>

          {/* Buttons for different formats */}
          <div className="format-buttons">
            <button className="format-button">HARD</button>
            <button className="format-button">SOFT</button>
            <button className="format-button">AUDIO</button>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="purchase-section">
            <div className="quantity">
              <label>Qty:</label>
              <input type="number" defaultValue="1" min="1" />
            </div>
            <button className="add-to-cart">+ Add To Cart</button>
            <button className="buy-now">+ Buy Now</button>
          </div>

          {/* Wishlist Link */}
          <p className="wishlist">
            <span>&hearts;</span> Add To Wish List
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
