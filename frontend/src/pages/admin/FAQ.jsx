import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import FAQController from "../../components/admin/FAQ/FAQController";
import "styles/ecole&college/FAQ/_faq.scss";

const FAQ = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="FAQ" text="Gérez les questions fréquemment posées" />
        <FAQController />
      </main>
    </>
  );
};

export default FAQ;
