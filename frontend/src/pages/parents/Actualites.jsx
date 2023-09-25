import React from "react";
import H2HeroText from "../../components/parents/H2HeroText";
import SearchFilter from "../../components/parents/Actualités/SearchFilter";
import NavigationParents from "../../components/parents/NavigationParents";
import Actualities from "../../components/parents/Actualités/Actualities";
import FooterParents from "../../components/parents/FooterParents";
import "styles/etablissement/Blog/_blog.scss";
import { Helmet } from "react-helmet";

const Actualites = () => {
  return (
    <>
      <Helmet>
        <title>Actualités - Parents</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationParents />
      <main>
        <H2HeroText
          h2="Les dernières actualités"
          text="Suivez régulièrement les articles d'actualités afin d'y découvrir des informations dédiés aux parents, tels que des photos de vos enfants en classe, des événements à venir ou des projets en cours."
        />
        <Actualities />
      </main>
      <FooterParents />
    </>
  );
};

export default Actualites;
