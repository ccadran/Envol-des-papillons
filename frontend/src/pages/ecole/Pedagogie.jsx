import React from "react";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import HeroPedagogie from "../../components/ecole&college/shared/Pedagogie/HeroPedagogie";
import Materials from "../../components/ecole&college/shared/Pedagogie/Materials";
import ClassesSchoolPedagogie from "../../components/ecole&college/ClassesSchoolPedagogie";
import EnglishPedagogie from "../../components/ecole&college/shared/Pedagogie/EnglishPedagogie";
import AvantagePedagogie from "../../components/ecole&college/shared/Pedagogie/AvantagePedagogie";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
import AvantagesPedagogie from "../../components/ecole&college/shared/Pedagogie/AvantagesPedagogie";

const Pedagogie = () => {
  return (
    <>
      <NavigationScolarity />
      <HeroPedagogie />
      <Materials />
      <ClassesSchoolPedagogie />
      <EnglishPedagogie />
      <AvantagesPedagogie />
      <FooterScolarity />
    </>
  );
};

export default Pedagogie;
