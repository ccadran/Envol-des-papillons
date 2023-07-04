import React from "react";

const ScheduleScolarity = () => {
  return (
    <section className="schedule">
      <h3>La journée type</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
        sequi ad rerum cupiditate iste ipsam hic delectus, ducimus quisquam
        aliquam odio officiis dolorum quis excepturi voluptates molestias iure
        nisi.
      </p>
      <div className="schedule-container">
        <div className="schedule-class">
          <h4>3-6ans</h4>
          <h4>6-8ans</h4>
          <h4>8-11ans</h4>
        </div>
        <div className="schedule-moment">
          <h4>Horraire</h4>
          <p>Description de l'activité durant la période</p>
        </div>
        <div className="schedule-moment">
          <h4>Horraire</h4>
          <p>Description de l'activité durant la période</p>
        </div>
        <div className="schedule-moment">
          <h4>Horraire</h4>
          <p>Description de l'activité durant la période</p>
        </div>
        <div className="schedule-moment">
          <h4>Horraire</h4>
          <p>Description de l'activité durant la période</p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleScolarity;
