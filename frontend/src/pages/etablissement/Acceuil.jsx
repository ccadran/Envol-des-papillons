import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import HeroHome from "../../components/etablissement/Acceuil/HeroHome";
import Etablissement from "../../components/etablissement/Acceuil/Etablissement";
import AllAvis from "../../components/shared/AllAvis";
import Locaux from "../../components/etablissement/Acceuil/Locaux";
import FooterGlobal from "../../components/shared/FooterGlobal";
import Etablissements from "../../components/etablissement/Acceuil/Etablissements";
import "styles/etablissement/Acceuil/_acceuil.scss";
const Acceuil = () => {
  return (
    <>
      <NavigationGlobal />
      <main>
        <HeroHome />

        <Etablissements />

        <AllAvis />

        <Locaux />
      </main>
      <FooterGlobal />
    </>
  );
};

export default Acceuil;
