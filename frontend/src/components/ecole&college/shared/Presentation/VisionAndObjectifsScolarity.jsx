import React from "react";
// import "styles/ecole&college/Presentation/_visionAndObjectifs.scss";

const VisionAndObjectifsScolarity = ({ vision, objectif }) => {
  return (
    <section className="visions-objectifs">
      <div className="vision-objectifs-container">
        <h3>Notre vision</h3>
        <ul>
          {vision.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="vision-objectifs-container">
        <h3>Notre vision</h3>
        <ul>
          {objectif.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VisionAndObjectifsScolarity;
