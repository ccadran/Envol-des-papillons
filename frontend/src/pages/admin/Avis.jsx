import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import AllAvisAdmin from "../../components/admin/Avis/AllAvisAdmin";

const Avis = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="Avis" text="Gérez les avis de votre établissement" />
        <AllAvisAdmin />
      </main>
    </>
  );
};

export default Avis;
