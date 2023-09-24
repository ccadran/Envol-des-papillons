import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import TarifsScolarity from "../../components/ecole-college/shared/TarifsScolarity";
import RepasInfos from "../../components/ecole-college/shared/InfosPratiques/RepasInfos";
import GarderieSchoolPedagogie from "../../components/ecole-college/GarderieSchoolPedagogie";
import RolesParentsInfos from "../../components/ecole-college/shared/InfosPratiques/RolesParentsInfos";
import SchoolRoad from "../../components/ecole-college/shared/SchoolRoad";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import "styles/ecole-college/InfosPratiques/_infosPratiques.scss";
import { Helmet } from "react-helmet";
import Periscolaire from "components/ecole-college/shared/InfosPratiques/Periscolaire";

const InfosPratiques = () => {
  return (
    <>
      <Helmet>
        <title>Infos pratiques - École montessori Bordeaux</title>
        <meta
          name="description"
          content="Prenez connaissance de l'ensemble des infos pratiques de notre école Montessori L'envol des papillons."
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <H1HeroText
          h1="Infos pratiques"
          text="Comment s’inscrire ? Combien ça coûte ? Est ce qu’il y a une cantine ? La réponse à toutes vos questions… et plus encore !"
        />
        <TarifsScolarity
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a fuga
        autem? Eos saepe corrupti sint architecto ab pariatur a dolores quas
        velit aperiam, doloribus, magnam esse rem facilis quisquam."
          scolarity="380€ /mois"
          inscription="200€"
          association="30€ /an"
          etablissement="ecole"
        />
        <RepasInfos />
        <GarderieSchoolPedagogie />
        <Periscolaire />
        <RolesParentsInfos
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        qui recusandae eius labore quas excepturi eaque pariatur officia eos."
        />
        <SchoolRoad text="texte de se rendre à l'école" />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default InfosPratiques;
