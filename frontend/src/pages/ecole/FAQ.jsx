import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import StylizedH1 from "../../components/shared/StylizedH1";
import HeroFAQ from "../../components/ecole-college/shared/FAQ/HeroFAQ";
import SectionFAQ from "../../components/ecole-college/shared/FAQ/SectionFAQ";
import ContentFAQ from "../../components/ecole-college/shared/FAQ/ContentFAQ";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import "styles/ecole-college/FAQ/_faq.scss";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - École montessori Bordeaux</title>
        <meta
          name="description"
          content=" Retreouvez les réponses aux questions les plus posées sur notre école Montessori L'envol des papillons."
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <HeroFAQ
          subTitle="Retrouvez les réponses aux questions les plus posées (pour l’école)"
          text="Nous avons développé notre site de manière à ce que chaque information soit facilement accecible, mais s'il vous reste une petite interrogation, sa réponse se trouve sans doute ici !
        "
        />
        <ContentFAQ etablissement="School" />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default FAQ;
