import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import HeroFAQ from "../../components/ecole-college/shared/FAQ/HeroFAQ";
import SectionFAQ from "../../components/ecole-college/shared/FAQ/SectionFAQ";
import ContentFAQ from "../../components/ecole-college/shared/FAQ/ContentFAQ";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Collège alternatif Bordeaux</title>
        <meta
          name="description"
          content=" Retreouvez les réponses aux questions les plus posées sur notre collège alternatif L'envol."
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <HeroFAQ
          subTitle="Retrouvez les réponses aux questions les plus posées (pour l’école)"
          text="Nous avons développé notre site de manière à ce que chaque information soit facilement accecible, mais s'il vous reste une petite interrogation, sa réponse se trouve sans doute ici !
        "
        />
        <ContentFAQ etablissement="college" />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default FAQ;
