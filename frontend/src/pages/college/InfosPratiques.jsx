import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import RepasInfos from "../../components/ecole-college/shared/InfosPratiques/RepasInfos";
import RolesParentsInfos from "../../components/ecole-college/shared/InfosPratiques/RolesParentsInfos";
import CollegeRoad from "../../components/ecole-college/shared/CollegeRoad";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import { Helmet } from "react-helmet";
import GarderieSchoolPedagogie from "components/ecole-college/GarderieSchoolPedagogie";
import TarifsScolarityCollege from "components/ecole-college/shared/TarifsScolarityCollege";
import GarderieCollegePedagogie from "components/ecole-college/GarderieCollegePedagogie";

const InfosPratiques = () => {
  return (
    <>
      <Helmet>
        <title>Infos pratiques - Collège alternatif Bordeaux</title>
        <meta
          name="description"
          content="Prenez connaissance de l'ensemble des infos pratiques de notre collègte alternatif L'envol ."
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <H1HeroText
          h1="Infos pratiques"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
        />
        <TarifsScolarityCollege
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a fuga
        autem? Eos saepe corrupti sint architecto ab pariatur a dolores quas
        velit aperiam, doloribus, magnam esse rem facilis quisquam."
          scolarity="430€ /mois"
          inscription="200€"
          association="30€ /an"
          etablissement="college"
        />
        <GarderieCollegePedagogie />
        <RepasInfos />
        <RolesParentsInfos
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        qui recusandae eius labore quas excepturi eaque pariatur officia eos."
        />
        <CollegeRoad text="texte de se rendre à l'école" />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default InfosPratiques;
