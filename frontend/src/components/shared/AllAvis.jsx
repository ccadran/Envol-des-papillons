import React, { useEffect, useState } from "react";
import Avis from "./Avis";
import axios from "axios";
import { set } from "mongoose";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "styles/shared/_avisCards.scss";

const AllAvis = ({ etablissement }) => {
  const [avis, setAvis] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/avis`, {
        params: {
          etablissement: etablissement,
        },
      })
      .then((res) => {
        setAvis(res.data);
      });
  }, []);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-arrow-next" onClick={onClick}>
        <i class="fa-solid fa-chevron-right"></i>{" "}
      </div>
    );
  };
  const settings = {
    dots: true, // Afficher les points indicateurs
    infinite: true, // Faire une boucle infinie
    speed: 500, // Vitesse de défilement en millisecondes
    slidesToShow: 2, // Nombre de cartes à afficher à la fois
    slidesToScroll: 1, // Nombre de cartes à faire défiler à la fois
    className: "slides",
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="avis">
      <h3>Les parents en parlent le mieux</h3>
      <div className="avis-container">
        {avis.length > 0 ? (
          <Slider {...settings}>
            {avis.map((avi) => (
              <Avis key={avi._id} avi={avi} />
            ))}
          </Slider>
        ) : (
          <p>Pas encore d'avis...</p>
        )}
      </div>
    </section>
  );
};

export default AllAvis;
