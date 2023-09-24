import React from "react";
import "styles/ecole-college/shared/_schoolRoad.scss";

const CollegeRoad = ({ text }) => {
  return (
    <section className="school-way">
      <h3>Se rendre au collège</h3>
      <p>
        Le collège alternatif l’Envol a trouvé sa place dans un local
        parfaitement situé au cœur du quartier des Chartrons à Bordeaux (109 bis
        cours du Médoc),<span> facilement accessible en tram ou en bus.</span>
      </p>
      <div className="college-road">
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=109%20cours%20du%20m%C3%A9doc+(L'envol%20des%20papillons,%20l'%C3%89cole)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default CollegeRoad;
