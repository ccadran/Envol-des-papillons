import React, { useEffect, useState } from "react";
import axios from "axios";
import Teacher from "./Teacher";
import "styles/ecole&college/Presentation/_pedagogicTeam.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PedagogicTeam = ({ text, etablissement }) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/teacher", {
        params: {
          etablissement: etablissement,
        },
      })
      .then((res) => {
        setTeachers(res.data);
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
    slidesToShow: 4, // Nombre de cartes à afficher à la fois
    slidesToScroll: 1, // Nombre de cartes à faire défiler à la fois
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
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
    <section className="pedagogic-team">
      <h3>L'équipe pédagogique</h3>
      <p>{text}</p>
      <div className="teachers-container">
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <Teacher key={teacher._id} teacher={teacher} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PedagogicTeam;
