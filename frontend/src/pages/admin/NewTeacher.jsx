import NavigationAdmin from "components/admin/NavigationAdmin";
import FormTeacher from "components/admin/Professeurs/FormTeacher";
import React from "react";
import "styles/admin/Teachers/_newTeacher.scss";
import { Helmet } from "react-helmet";
import Back from "components/shared/Back";

const NewTeacher = () => {
  return (
    <>
      <Helmet>
        <title>Nouvel enseignant - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <Back link="/admin/teachers" />
        <div className="intro">
          <h4>Ajouter un professeur</h4>
        </div>
        <FormTeacher />
      </main>
    </>
  );
};

export default NewTeacher;
