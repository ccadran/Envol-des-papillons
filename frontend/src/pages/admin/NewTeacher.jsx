import NavigationAdmin from "components/admin/NavigationAdmin";
import FormTeacher from "components/admin/Professeurs/FormTeacher";
import React from "react";
import { Link } from "react-router-dom";
import "styles/admin/Teachers/_newTeacher.scss";
import chevron from "assets/logos/chevron.svg";

const NewTeacher = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <div className="back">
          <img src={chevron} alt="" />
          <Link to="/admin/teachers">Retour</Link>
        </div>
        <div className="intro">
          <h4>Ajouter un professeur</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            adipisci iste perspiciatis pariatur, beatae corporis.
          </p>
        </div>
        <FormTeacher />
      </main>
    </>
  );
};

export default NewTeacher;
