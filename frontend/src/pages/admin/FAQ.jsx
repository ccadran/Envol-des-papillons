import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import FAQController from "../../components/admin/FAQ/FAQController";
import "styles/ecole-college/FAQ/_faq.scss";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="FAQ" text="Gérez les questions fréquemment posées" />
        <FAQController />
      </main>
    </>
  );
};

export default FAQ;
