import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import AllAvis from "../../components/shared/AllAvis";
import FooterGlobal from "../../components/shared/FooterGlobal";
import { Helmet } from "react-helmet";

import "styles/etablissement/Accueil/_accueil.scss";
import HeroHome from "components/etablissement/Acceuil/HeroHome";
import Etablissements from "components/etablissement/Acceuil/Etablissements";
import Locaux from "components/etablissement/Acceuil/Locaux";
const Accueil = () => {
  return (
    <>
      <Helmet>
        <title>accueil - L'envol des papillon</title>
        <meta
          name="description"
          content="Découvrez L'Envol des Papillons, un établissement accueillant une école Montessori ainsi qu'un collège alternatif, fondée à Bordeaux en 2012, nous offrons une éducation bienveillante et individualisée à un tarif abordable. Éveillez la passion d'apprendre de votre enfant dès aujourd'hui."
        />
      </Helmet>
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

export default Accueil;
