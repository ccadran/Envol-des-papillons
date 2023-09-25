import MailController from "components/admin/Mail/MailController";
import NavigationAdmin from "components/admin/NavigationAdmin";
import H1HeroText from "components/shared/H1HeroText";
import React from "react";
import "styles/admin/Mail/_mail.scss";
import { Helmet } from "react-helmet";

const MailParent = () => {
  return (
    <>
      <Helmet>
        <title>Nouveau mail - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText
          h1="Mails des parents"
          text="Gérez les mails des parents. Un mail ajouté pourra permettre de créer un compte parent. N'oubliez pas de supprimer le mail lorsque l'enfant ne fais plus partie de l'établissement."
        />
        <MailController />
      </main>
    </>
  );
};

export default MailParent;
