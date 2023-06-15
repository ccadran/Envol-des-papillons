import React from "react";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import ModalityInscription from "../../components/ecole&college/shared/Inscription/ModalityInscription";
import TarifsScolarity from "../../components/ecole&college/shared/TarifsScolarity";
import PreInscription from "../../components/ecole&college/shared/Inscription/PreInscription";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
const Inscription = () => {
  return (
    <>
      <NavigationScolarity />
      <H1HeroText />
      <ModalityInscription />
      <TarifsScolarity />
      <PreInscription />
      <FooterScolarity />
    </>
  );
};

export default Inscription;
