import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";

const Materials = ({ text, images }) => {
  return (
    <section className="materials">
      <h3>Un matériel adapté</h3>
      <div className="materials-container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          similique non enim fugiat deleniti ut qui commodi doloremque,
          doloribus neque at sit fugit, nisi culpa quisquam quo quod corporis
          laboriosam obcaecati. Sapiente quo enim nemo dignissimos autem odio
          sed incidunt rerum numquam sint! Earum sequi qui optio aliquam
          voluptatem laboriosam.
        </p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Materials;
