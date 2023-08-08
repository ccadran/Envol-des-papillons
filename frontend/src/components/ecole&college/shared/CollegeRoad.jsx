import React from "react";
import "styles/ecole&college/shared/_schoolRoad.scss";

const CollegeRoad = ({ text }) => {
  return (
    <section className="school-way">
      <h3>Se rendre au collège</h3>
      <p>{text}</p>
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
