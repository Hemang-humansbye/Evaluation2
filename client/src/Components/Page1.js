import React from "react";
import "../Styles/Page1.css"; // Import the CSS for Page 1

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="breadcrumbs">
        <span>Home</span> &gt; <span>Harry Potter BoxSet CursedChild</span>
      </div>

      <div className="content-wrapper">
        {/* Book Image */}
        <div className="book-image">
          <img
            src="https://booksandyou.in/cdn/shop/files/HarryPotterBoxSetCursedChild_beb3a56c-0d20-4c82-9267-69c684b534e6.jpg?v=1696398244&width=1445"
            alt="A Wing and A Prayer"
          />
        </div>

        {/* Book Details */}
        <div className="book-details">
          <h1>Harry Potter BoxSet CursedChild </h1>
          <p>Authour: <strong>J.K Rowling</strong></p>
          <p>Availability: <span className="in-stock">In Stock</span></p>
          <p>
            SKU: <strong>123</strong>
          </p>

          <div className="price">
            <span className="current-price">$14.99</span>
            <span className="original-price">$19.99</span>
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

export default Page1;
