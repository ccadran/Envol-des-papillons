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
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad  diam sit amet lacinia. Aliquam in elementum tellus."
        />
        <AvisContent />
      </main>
      <FooterParents />
    </>
  );
};

export default Avis;
