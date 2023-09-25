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
import imgHero from "assets/img/college-presentation.jpg";
import imgLocal1 from "assets/img/college-local1.jpg";
import imgLocal2 from "assets/img/college-local2.jpg";
import HeroScolarity from "components/ecole-college/shared/College-Presentation/HeroScolarity";

const Presentation = () => {
  const imagesArray = {
    imgLocal1,
    imgLocal2,
  };

  const imagesLocaux = [];

  for (let i = 1; i <= Object.keys(imagesArray).length; i++) {
    const imageKey = `imgLocal${i}`;
    imagesLocaux.push({ src: imagesArray[imageKey] });
  }

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
          img={imgHero}
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
        
Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur ."
          color="blue"
          etablissement="college"
        />
        <VisionAndObjectifsScolarity />
        <LocalScolarity
          text="Description du local de l'collège blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns"
          images={imagesLocaux}
        />
        <ScheduleScolarity textIntro="text intro du calendrier de l'collège " />
        <PedagogicTeam
          text="Découvrez l'ensemble des profesionnels qui sont là pour votre enfant au quotidien et font vivre les valeurs du collège."
          etablissement="collège"
        />
        <AllAvis etablissement="collège" />
        <CollegeRoad text="texte de se rendre a l'collège" />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Presentation;
