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
      <NavigationScolarity etablissement="college" />
      <main>
        <H1HeroText
          h1="Inscription"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
        />
        <ModalityInscription />
        <TarifsScolarity
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a fuga
        autem? Eos saepe corrupti sint architecto ab pariatur a dolores quas
        velit aperiam, doloribus, magnam esse rem facilis quisquam."
          scolarity="430€ /mois"
          inscription="200€"
          association="30€ /an"
        />
        <PreInscription
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        temporibus fugiat nemo labore debitis a fuga, aliquam possimus,
        delectus, deserunt sit iste animi quisquam perferendis earum ad sequi
        libero eum."
        />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Inscription;
