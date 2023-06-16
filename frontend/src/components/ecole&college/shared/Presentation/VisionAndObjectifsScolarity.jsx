import React from "react";

const VisionAndObjectifsScolarity = ({ vision, objectif }) => {
  return (
    <section className="visions-objectifs">
      <div className="vision">
        <h3>Notre vision</h3>
        <p>{vision}</p>
      </div>
      <div className="objectifs">
        <h3>Nos objectifs</h3>
        <p>{objectif}</p>
      </div>
    </section>
  );
};

export default VisionAndObjectifsScolarity;
