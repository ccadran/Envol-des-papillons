import React from "react";
import NavigationParents from "../../components/parents/NavigationParents";
import FooterParents from "../../components/parents/FooterParents";
import H2HeroText from "../../components/parents/H2HeroText";
import AvisContent from "../../components/parents/Avis/AvisContent";
import "styles/parents/Avis/_avis.scss";
import { Helmet } from "react-helmet";

const Avis = () => {
  return (
    <>
      <Helmet>
        <title>Avis - Parents</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationParents />
      <main>
        <H2HeroText
          h2="Laisser un avis"
          text="Les avis sont un excellent moyen de nous faire part de vos retours sur notre établissement. N'hésitez pas à partager vos impressions et commentaires pour nous aider à nous améliorer."
        />
        <AvisContent />
      </main>
      <FooterParents />
    </>
  );
};

export default Avis;
