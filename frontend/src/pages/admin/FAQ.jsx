import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import FAQController from "../../components/admin/FAQController";

const FAQ = () => {
  return (
    <>
      <NavigationAdmin />
      <H1HeroText h1="FAQ" text="Gérez les questions fréquemment posées" />
      <FAQController />
    </>
  );
};

export default FAQ;
