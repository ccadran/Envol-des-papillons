import React from "react";
import test from "assets/img/test.JPG";
import img from "assets/img/etablissement-methodo.jpg";
import imgHero from "assets/img/Group 1.svg";

const HeroHome = () => {
  return (
    <div className="hero-home">
      <div className="hero-banner">
        <div className="hero-text">
          <h1>L'envol des papillons</h1>
          <p id="sub-hero">École & Collège Montessori</p>
          <p id="catch-phrase">
            L'école alternative dont votre enfant a besoin
          </p>
        </div>
        <div className="hero-illustration">
          <img src={imgHero} alt="hero-illustration" />
        </div>
      </div>
      <div className="hero-presentation">
        <div className="img-container">
          <img src={img} alt="illu-presentation" />
        </div>
        <div className="pres-text">
          <h4>Une méthodologie innovante</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            nam aliquid! Repudiandae placeat ratione velit nulla, harum
            consequuntur non earum eveniet expedita, quis voluptate fugit.
            Facilis nostrum ipsum hic molestiae sapiente temporibus ducimus est,
            quis, ipsa vero atque consectetur tenetur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
