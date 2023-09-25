import NavigationAdmin from "components/admin/NavigationAdmin";
import React from "react";
import FormNewMail from "components/admin/Mail/FormNewMail";
import "styles/admin/Mail/_newMail.scss";
import { Helmet } from "react-helmet";
import Back from "components/shared/Back";

const NewMailParent = () => {
  return (
    <>
      <Helmet>
        <title>Nouvel email - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <Back link="/admin/mails" />
        <div className="intro">
          <h4>Ajouter un mail</h4>
          <p>
            Un mail ajouté pourra permettre de créer un compte parent. N'oubliez
            pas de supprimer le mail lorsque l'enfant ne fais plus partie de
            l'établissement.
          </p>
        </div>
        <FormNewMail />
      </main>
    </>
  );
};

export default NewMailParent;
