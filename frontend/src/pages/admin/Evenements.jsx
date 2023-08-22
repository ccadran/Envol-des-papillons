import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import { Helmet } from "react-helmet";

const Evenements = () => {
  return (
    <>
      <Helmet>
        <title>Événements - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText
          h1="Evenements"
          text="Gérez les évènements de votre établissement"
        />
        <h1>API Google Agenda</h1>
      </main>
    </>
  );
};

export default Evenements;
