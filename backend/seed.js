const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/bookModel");

dotenv.config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Example books
    const books = [
        {
          title: "A Million Little Pieces",
          author: "James Frey",
          image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
          discountedPrice: 1299,
          originalPrice: 1999,
        },
        {
          title: "A Wing And A Prayer",
          author: "John Morano",
          image: "https://covers.openlibrary.org/b/id/8110972-L.jpg",
          discountedPrice: 1499,
          originalPrice: 1999,
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          image: "https://covers.openlibrary.org/b/id/8225262-L.jpg",
          discountedPrice: 1099,
          originalPrice: 1599,
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          image: "https://covers.openlibrary.org/b/id/8225422-L.jpg",
          discountedPrice: 899,
          originalPrice: 1299,
        },
        {
          title: "1984",
          author: "George Orwell",
          image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
          discountedPrice: 999,
          originalPrice: 1499,
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          image: "https://covers.openlibrary.org/b/id/8318374-L.jpg",
          discountedPrice: 1199,
          originalPrice: 1799,
        },
        {
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          image: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
          discountedPrice: 1049,
          originalPrice: 1399,
        },
        {
          title: "Moby-Dick",
          author: "Herman Melville",
          image: "https://covers.openlibrary.org/b/id/8225465-L.jpg",
          discountedPrice: 1299,
          originalPrice: 1899,
        },
        {
          title: "War and Peace",
          author: "Leo Tolstoy",
          image: "https://covers.openlibrary.org/b/id/8100933-L.jpg",
          discountedPrice: 1599,
          originalPrice: 2299,
        },
        {
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          image: "https://covers.openlibrary.org/b/id/8207892-L.jpg",
          discountedPrice: 1399,
          originalPrice: 1999,
        },
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          image: "https://covers.openlibrary.org/b/id/8234157-L.jpg",
          discountedPrice: 1449,
          originalPrice: 2099,
        },
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          image: "https://covers.openlibrary.org/b/id/8274102-L.jpg",
          discountedPrice: 999,
          originalPrice: 1499,
        },
        {
          title: "Brave New World",
          author: "Aldous Huxley",
          image: "https://covers.openlibrary.org/b/id/8224126-L.jpg",
          discountedPrice: 1099,
          originalPrice: 1699,
        }, {
            title: "Brave New World",
            author: "Aldous Huxley",
            image: "https://covers.openlibrary.org/b/id/8224126-L.jpg",
            discountedPrice: 1099,
            originalPrice: 1699,
          },

        {
          title: "Harry Potter and the cursed child",
          author: "J.K Rowlings",
          image: "https://booksandyou.in/cdn/shop/files/HarryPotterBoxSetCursedChild_beb3a56c-0d20-4c82-9267-69c684b534e6.jpg?v=1696398244&width=1445",
          discountedPrice: 800,
          originalPrice: 1299,
        }
      ];

    await Book.insertMany(books);
    console.log("Books seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedBooks();
