import React from "react";
import NavigationGlobal from "../../components/etablissement/NavigationGlobal";
import HeroHome from "../../components/etablissement/Acceuil/HeroHome";
import Etablissement from "../../components/etablissement/Acceuil/Etablissement";
import AllAvis from "../../components/shared/AllAvis";
import Locaux from "../../components/etablissement/Acceuil/Locaux";
import FooterGlobal from "../../components/etablissement/FooterGlobal";
const Acceuil = () => {
  return (
    <>
      <NavigationGlobal />
      <HeroHome />
      <section className="etablissements">
        <h3>Nos établissements</h3>
        <div className="etablissements-container">
          <Etablissement />
          <Etablissement />
        </div>
      </section>
      <section className="avis">
        <h3>Les parents en parlent le mieux</h3>
        <AllAvis />
      </section>
      <section className="locaux">
        <h3>Des locaux au coeur de Bordeaux</h3>
        <Locaux />
      </section>
      <FooterGlobal />
    </>
  );
};

export default Acceuil;
