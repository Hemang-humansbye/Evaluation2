
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";
import "../Styles/BookSalePage.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
        setLoading(false);
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
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
