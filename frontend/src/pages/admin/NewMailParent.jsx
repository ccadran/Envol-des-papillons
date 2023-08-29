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
            LES MAILS SERVENT A CREER UN COMPTE PARENT Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae amet ipsa explicabo
            architecto qui reiciendis, fugiat dolores vero voluptas porro
            dignissimos consequuntur non saepe facilis ea. Reiciendis cupiditate
            distinctio unde.
          </p>
        </div>
        <FormNewMail />
      </main>
    </>
  );
};

export default NewMailParent;
