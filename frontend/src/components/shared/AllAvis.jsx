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
      .get("http://localhost:5001/avis", {
        params: {
          etablissement: etablissement,
        },
      })
      .then((res) => {
        setAvis(res.data);
      });
  }, []);
  const settings = {
    dots: true, // Afficher les points indicateurs
    infinite: true, // Faire une boucle infinie
    speed: 500, // Vitesse de défilement en millisecondes
    slidesToShow: 3, // Nombre de cartes à afficher à la fois
    slidesToScroll: 1, // Nombre de cartes à faire défiler à la fois
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          <p>Chargement des avis...</p>
        )}
      </div>
    </section>
  );
};

export default AllAvis;
