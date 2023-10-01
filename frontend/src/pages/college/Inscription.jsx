import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import ModalityInscription from "components/ecole-college/shared/College-Inscription/ModalityInscription";
import TarifsScolarity from "../../components/ecole-college/shared/TarifsScolarity";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import { Helmet } from "react-helmet";
import PreInscription from "components/ecole-college/shared/Inscription/PreInscription";
import TarifsScolarityCollege from "components/ecole-college/shared/TarifsScolarityCollege";
const Inscription = () => {
  return (
    <>
      <Helmet>
        <title>Inscription - Collège alternatif Bordeaux</title>
        <meta
          name="description"
          content="Prenez connaissance des tarifs abordables proposés par notre collège alternatif L'envol et remplissez le formulaire de pré-inscription."
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <H1HeroText
          h1="Inscription"
          text="Découvrez toutes les informations relatives à l'inscription et comprenez facilement toutes les démarches à suivres pour inscrire votre enfant dans notre collège alternatif."
        />
        <ModalityInscription />
        <TarifsScolarityCollege
          text="Nous essayons de maintenir les tarifs le plus bas possible tout en vous proposant une offre pédagogique de qualité.
        "
          scolarity="460€ /mois"
          inscription="200€"
          association="20€+150€ /an"
        />
        <PreInscription text="Remplissez notre formulaire de pré-inscription le plus rapidement possible afin d'engager la démarche d'inscription. En suivant vous recevrez un mail confirmant la bonne récéption du formulaire et la directrice vous contactera sous un délai d'une semaine afin de planifier un rendez-vous." />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Inscription;
