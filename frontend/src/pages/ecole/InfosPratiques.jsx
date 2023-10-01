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
          text="Nous essayons de maintenir les tarifs le plus bas possible tout en vous proposant une offre pédagogique de qualité."
          scolarity="400€ /mois"
          inscription="200€"
          association="20€+150€ /an"
          etablissement="ecole"
        />
        <RepasInfos />
        <GarderieSchoolPedagogie />
        <Periscolaire />
        <RolesParentsInfos
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        qui recusandae eius labore quas excepturi eaque pariatur officia eos."
        />
        <SchoolRoad
          text="  L’école est située dans le quartier des Chartrons à Bordeaux
                (125 cours Journu Auber), à 15-20’ du centre de Bordeaux,
                facilement accessible en tram (ligne C – Arrêt Grand Parc) ou en
                bus (liane 5)."
        />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default InfosPratiques;
