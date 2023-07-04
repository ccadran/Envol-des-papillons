import React from "react";
import { Link } from "react-router-dom";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import HeroScolarity from "../../components/ecole&college/shared/Presentation/HeroScolarity";
import VisionAndObjectifsScolarity from "../../components/ecole&college/shared/Presentation/VisionAndObjectifsScolarity";
import LocalScolarity from "../../components/ecole&college/shared/Presentation/LocalScolarity";
import ScheduleScolarity from "../../components/ecole&college/shared/Presentation/ScheduleScolarity";
import PedagogicTeam from "../../components/ecole&college/shared/Presentation/PedagogicTeam";
import CollegeRoad from "../../components/ecole&college/shared/CollegeRoad";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
import AllAvis from "../../components/shared/AllAvis";
import "styles/ecole&college/Presentation/_presentation.scss";

const Presentation = () => {
  const imagesLocaux = [
    // les paths des images des locaux de l'collège
  ];
  const visionPoints = [
    "Viser le développement de l’enfant dans sa globalité",
    "Donner les meilleurs chances de réussir",
  ];
  const objectifPoints = [
    "Viser le développement de l’enfant dans sa",
    "Donner les meilleurs chances de ",
  ];
  return (
    <>
      <NavigationScolarity etablissement="college" />
      <HeroScolarity
        h1="collège"
        img=""
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur ."
        color="orange"
      />
      <VisionAndObjectifsScolarity
        vision={visionPoints}
        objectif={objectifPoints}
      />
      <LocalScolarity
        text="Description du local de l'collège blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns"
        images={imagesLocaux}
      />
      <ScheduleScolarity textIntro="text intro du calendrier de l'collège " />
      <PedagogicTeam
        text="text de l'équipe pédagogique de l'collège"
        etablissement="collège"
      />
      <AllAvis etablissement="collège" />
      <CollegeRoad text="texte de se rendre a l'collège" />
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Presentation;
