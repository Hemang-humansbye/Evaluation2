import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Home.css";
import sampleVideo from "../Components/assests/Bookstore.mp4";

const HomePage = () => {
  const navigate = useNavigate();

  const images = [
    { src: "https://booksandyou.in/cdn/shop/files/HarryPotterBoxSetCursedChild_beb3a56c-0d20-4c82-9267-69c684b534e6.jpg?v=1696398244&width=1445", path: "/page1" },
    { src: "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF1000,1000_QL80_.jpg", path: "/page2" },
    { src: "https://via.placeholder.com/400x350/5733FF/ffffff?text=Image+3", path: "/page3" },
    { src: "https://via.placeholder.com/400x350/FF33A1/ffffff?text=Image+4", path: "/page4" },
    { src: "https://via.placeholder.com/400x350/33A1FF/ffffff?text=Image+5", path: "/page5" },
    { src: "https://via.placeholder.com/400x350/A1FF33/ffffff?text=Image+6", path: "/page6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      {/* Video Section with Overlay Text */}
      <div className="video-section">
        <div className="video-overlay">
          <video
            loop
            autoPlay
            muted
            className="homepage-video"
          >
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <h1>Welcome to Book Haven</h1>
            <p>Your one-stop shop for all kinds of books!</p>
          </div>
        </div>
      </div>

      <h1>Author's Collective</h1>

      {/* Image Carousel */}
      <div className="image-carousel">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div
              key={index}
              className="image-slide"
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
