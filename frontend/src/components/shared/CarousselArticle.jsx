import React, { useState } from "react";
import "styles/shared/_carousselArticle.scss";

const CarousselArticle = ({ images }) => {
  const [slide, setSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? images.length - 1 : slide - 1));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setEndX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = startX - endX;

    if (diff > 50) {
      // Swiped to the left
      nextSlide();
    } else if (diff < -50) {
      // Swiped to the right
      prevSlide();
    }
  };
  console.log();

  return (
    <>
      <div className="caroussel-article">
        <i
          className="fa-solid fa-chevron-left chevron chevron-left"
          onClick={prevSlide}
        ></i>
        <div
          className="slides-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images && images.length > 0
            ? images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="img"
                    className={slide === index ? "slide" : "slide-hidden"}
                  />
                );
              })
            : null}
        </div>
        <i
          className="fa-solid fa-chevron-right chevron chevron-right"
          onClick={nextSlide}
        ></i>
        <span className="indicators">
          {images && images.length > 0
            ? images.map((image, index) => {
                return (
                  <div
                    onClick={() => setSlide(index)}
                    className={
                      slide === index
                        ? "indicator"
                        : "indicator indicator-inactive"
                    }
                  >
                    <img key={index} src={image} alt="img" />
                  </div>
                );
              })
            : null}
        </span>
      </div>
    </>
  );
};

export default CarousselArticle;
