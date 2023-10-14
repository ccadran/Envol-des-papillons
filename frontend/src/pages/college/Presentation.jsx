import React from "react";
import { Link } from "react-router-dom";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import VisionAndObjectifsScolarity from "components/ecole-college/shared/College-Presentation/VisionAndObjectifsScolarity";
import LocalScolarity from "../../components/ecole-college/shared/College-Presentation/LocalScolarity";
import ScheduleScolarity from "components/ecole-college/shared/College-Presentation/ScheduleScolarity";
import PedagogicTeam from "../../components/ecole-college/shared/Presentation/PedagogicTeam";
import CollegeRoad from "../../components/ecole-college/shared/CollegeRoad";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import AllAvis from "../../components/shared/AllAvis";
import "styles/ecole-college/Presentation/_presentation.scss";
import { Helmet } from "react-helmet";
import HeroScolarity from "components/ecole-college/shared/College-Presentation/HeroScolarity";

const Presentation = () => {
  return (
    <>
      <Helmet>
        <title>Collège alternatif Bordeaux - Présentation</title>
        <meta
          name="description"
          content="Découvrez L'Envol, un collège alternatif fondée à Bordeaux en 2020, offrant une éducation bienveillante et individualisée à un tarif abordable. Éveillez la passion d'apprendre de votre enfant dès aujourd'hui."
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <HeroScolarity
          h1="Collège"
          img={process.env.PUBLIC_URL + "/assets/img/college-presentation.jpg"}
          color="blue"
          etablissement="college"
        />
        <VisionAndObjectifsScolarity />
        <LocalScolarity
          text="Description du local de l'collège blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns"
          images={[
            {
              src: process.env.PUBLIC_URL + "/assets/img/college-local1.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/college-local2.jpg",
            },
          ]}
        />
        <ScheduleScolarity textIntro="text intro du calendrier de l'collège " />
        <PedagogicTeam
          text="Découvrez l'ensemble des professionnels qui sont là pour votre enfant au quotidien et font vivre les valeurs du collège."
          etablissement="collège"
        />
        <AllAvis etablissement="collège" />
        <CollegeRoad text="texte pour se rendre au collège" />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Presentation;
