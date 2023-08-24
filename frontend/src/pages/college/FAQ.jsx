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
          text="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        "
        />
        <ContentFAQ etablissement="college" />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default FAQ;
