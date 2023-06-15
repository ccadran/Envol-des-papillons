import React from "react";
import { Link } from "react-router-dom";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import HeroScolarity from "../../components/ecole&college/shared/Presentation/HeroScolarity";
import VisionAndObjectifsScolarity from "../../components/ecole&college/shared/Presentation/VisionAndObjectifsScolarity";
import LocalScolarity from "../../components/ecole&college/shared/Presentation/LocalScolarity";
import ScheduleScolarity from "../../components/ecole&college/shared/Presentation/ScheduleScolarity";
import PedagogicTeam from "../../components/ecole&college/shared/Presentation/PedagogicTeam";
import AllAvis from "../../components/shared/AllAvis";
import SchoolRoad from "../../components/ecole&college/shared/SchoolRoad";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";

const Presentation = () => {
  return (
    <>
      <NavigationScolarity />
      <HeroScolarity />
      <VisionAndObjectifsScolarity />
      <LocalScolarity />
      <section className="type-day">
        <h3>La journée type</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          a nemo, dolor autem perferendis necessitatibus magni cum distinctio
          minus ullam. Officiis delectus ipsam perferendis cupiditate
          exercitationem nam sit animi qui.
        </p>
        <ScheduleScolarity />
      </section>
      <section className="pedagogic-team">
        <h3>L'équipe pédagogique</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          saepe, tempora veniam, ab officiis, adipisci mollitia molestiae illum
          dolores quibusdam laboriosam hic. Eligendi sapiente ipsam ab eos
          explicabo? Totam, quia?
        </p>
        <PedagogicTeam />
      </section>
      <AllAvis />
      <SchoolRoad />
      <FooterScolarity />
    </>
  );
};

export default Presentation;
