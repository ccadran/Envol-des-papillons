import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import Actualities from "../../components/parents/Actualités/Actualities";

const Actualites = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="Actualités" text="Gérez les articles d'actualités" />
        <Actualities />
      </main>
    </>
  );
};

export default Actualites;
