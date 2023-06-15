import React from "react";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import TarifsScolarity from "../../components/ecole&college/shared/TarifsScolarity";
import RepasInfos from "../../components/ecole&college/shared/InfosPratiques/RepasInfos";
import GarderieSchoolPedagogie from "../../components/ecole&college/GarderieSchoolPedagogie";
import RolesParentsInfos from "../../components/ecole&college/shared/InfosPratiques/RolesParentsInfos";
import SchoolRoad from "../../components/ecole&college/shared/SchoolRoad";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";

const InfosPratiques = () => {
  return (
    <>
      <NavigationScolarity />
      <H1HeroText />
      <TarifsScolarity />
      <RepasInfos />
      <GarderieSchoolPedagogie />
      <RolesParentsInfos />
      <SchoolRoad />
      <FooterScolarity />
    </>
  );
};

export default InfosPratiques;
