import React from "react";
// import "styles/ecole-college/Presentation/_visionAndObjectifs.scss";

const VisionAndObjectifsScolarity = ({ vision, objectif }) => {
  return (
    <section className="visions-objectifs">
      <article className="vision-objectifs-container">
        <h3>Notre vision</h3>
        <ul>
          {vision.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </article>
      <article className="vision-objectifs-container">
        <h3>Nos objectifs</h3>
        <ul>
          {objectif.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default VisionAndObjectifsScolarity;
