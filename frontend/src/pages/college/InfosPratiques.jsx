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
          text="Comment s’inscrire ? Combien ça coûte ? Est ce qu’il y a une cantine ? La réponse à toutes vos questions… et plus encore !

          "
        />
        <TarifsScolarityCollege
          text="Nous essayons de maintenir les tarifs le plus bas possible tout en vous proposant une offre pédagogique de qualité.

          "
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
