import NavigationAdmin from "components/admin/NavigationAdmin";
import FormTeacher from "components/admin/Professeurs/FormTeacher";
import React from "react";
import { Link } from "react-router-dom";

const NewTeacher = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <Link to="/admin/teachers">Retour</Link>
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
