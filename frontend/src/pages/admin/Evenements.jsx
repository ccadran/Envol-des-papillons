import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";

const Evenements = () => {
  return (
    <>
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
