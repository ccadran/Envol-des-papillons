import React from "react";
import Teacher from "./Teacher";

const PedagogicTeam = ({ text }) => {
  return (
    <section className="pedagogic-team">
      <h3>L'équipe pédagogique</h3>
      <p>{text}</p>
      <div className="teachers-container">
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
    </section>
  );
};

export default PedagogicTeam;
