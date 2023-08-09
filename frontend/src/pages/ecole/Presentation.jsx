import React from "react";
import { Link } from "react-router-dom";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import HeroScolarity from "../../components/ecole&college/shared/Presentation/HeroScolarity";
import VisionAndObjectifsScolarity from "../../components/ecole&college/shared/Presentation/VisionAndObjectifsScolarity";
import LocalScolarity from "../../components/ecole&college/shared/Presentation/LocalScolarity";
import ScheduleScolarity from "../../components/ecole&college/shared/Presentation/ScheduleScolarity";
import PedagogicTeam from "../../components/ecole&college/shared/Presentation/PedagogicTeam";
import SchoolRoad from "../../components/ecole&college/shared/SchoolRoad";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
import AllAvis from "../../components/shared/AllAvis";
import "styles/ecole&college/Presentation/_presentation.scss";
//IMAGES
import imgHero from "assets/img/school-presentation.jpg";
import imgLocal1 from "assets/img/school-local1.jpg";
import imgLocal2 from "assets/img/school-local2.jpg";
import imgLocal3 from "assets/img/school-local3.jpg";
import imgLocal4 from "assets/img/school-local4.jpg";
import imgLocal5 from "assets/img/school-local5.jpg";

const Presentation = () => {
  const imagesArray = {
    imgLocal1,
    imgLocal2,
    imgLocal3,
    imgLocal4,
    imgLocal5,
  };

  const imagesLocaux = [];

  for (let i = 1; i <= Object.keys(imagesArray).length; i++) {
    const imageKey = `imgLocal${i}`;
    imagesLocaux.push({ src: imagesArray[imageKey] });
  }
  const visionPoints = [
    "Viser le développement de l’enfant dans sa globalité iser le développement de l’enfant dans sa globalité iser le développement de l’enfant dans sa globalité",
    "Donner les meilleurs chances de réussir",
  ];
  const objectifPoints = [
    "Viser le développement de l’enfant dans sa",
    "Donner les meilleurs chances de ",
  ];
  return (
    <>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <HeroScolarity
          h1="École"
          img={imgHero}
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur ."
          color="orange"
          etablissement="ecole"
        />
        <VisionAndObjectifsScolarity
          // vision="La vision de l'école blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns.
          // dfbsvhikgfbvsjfvbndsi"
          vision={visionPoints}
          objectif={objectifPoints}
        />
        <LocalScolarity
          text="Description du local de l'école blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns"
          images={imagesLocaux}
        />
        <ScheduleScolarity textIntro="text intro du calendrier de l'école " />
        <PedagogicTeam
          text="text de l'équipe pédagogique de l'école"
          etablissement="école"
        />
        <AllAvis etablissement="école" />
        <SchoolRoad text="texte de se rendre a l'école" />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default Presentation;
