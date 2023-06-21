import React from "react";
import H2HeroText from "../../components/parents/H2HeroText";
import SearchFilter from "../../components/parents/Actualités/SearchFilter";
import NavigationParents from "../../components/parents/NavigationParents";
import Actualities from "../../components/parents/Actualités/Actualities";
import FooterParents from "../../components/parents/FooterParents";

const Actualites = () => {
  return (
    <>
      <NavigationParents />
      <H2HeroText
        h2="Les dernières actualités"
        text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <SearchFilter />
      <Actualities />
      <FooterParents />
    </>
  );
};

export default Actualites;
