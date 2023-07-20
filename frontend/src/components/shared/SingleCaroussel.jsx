import React, { useState } from "react";
import "styles/shared/_singleCaroussel.scss";

const SingleCaroussel = ({ images }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };
  console.log(images);
  return (
    <>
      <div className="caroussel">
        <i
          class="fa-solid fa-chevron-left chevron chevron-left"
          onClick={prevSlide}
        ></i>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.src}
              alt="img"
              className={slide === index ? "slide" : "slide-hidden"}
            />
          );
        })}
        <i
          class="fa-solid fa-chevron-right chevron chevron-right"
          onClick={nextSlide}
        ></i>
        <span className="indicators">
          {images.map((_, index) => {
            return (
              <i
                key={index}
                className={
                  slide === index
                    ? " fa-solid fa-circle indicator indicator"
                    : " fa-solid fa-circle indicator indicator indicator-inactive"
                }
                onClick={() => setSlide(index)}
              ></i>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default SingleCaroussel;
