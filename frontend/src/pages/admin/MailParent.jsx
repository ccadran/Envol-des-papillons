import MailController from "components/admin/Mail/MailController";
import NavigationAdmin from "components/admin/NavigationAdmin";
import H1HeroText from "components/shared/H1HeroText";
import React from "react";
import "styles/admin/Mail/_mail.scss";

const MailParent = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <H1HeroText
          h1="Mails des parents"
          text="Gestion des mails des parents"
        />
        <MailController />
      </main>
    </>
  );
};

export default MailParent;
