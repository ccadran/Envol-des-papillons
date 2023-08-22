import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import HeroHome from "../../components/etablissement/Acceuil/HeroHome";
import Etablissement from "../../components/etablissement/Acceuil/Etablissement";
import AllAvis from "../../components/shared/AllAvis";
import Locaux from "../../components/etablissement/Acceuil/Locaux";
import FooterGlobal from "../../components/shared/FooterGlobal";
import Etablissements from "../../components/etablissement/Acceuil/Etablissements";
import { Helmet } from "react-helmet";
import "styles/etablissement/Acceuil/_acceuil.scss";
const Acceuil = () => {
  return (
    <>
      <Helmet>
        <title>Acceuil - L'envol des papillon</title>
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

export default Acceuil;
