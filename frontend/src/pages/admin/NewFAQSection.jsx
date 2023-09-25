import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import FormFAQSection from "../../components/admin/FAQ/FormFAQSection";
import "styles/admin/FAQ/_newSection.scss";
import { Helmet } from "react-helmet";
import Back from "components/shared/Back";

const NewFAQSection = () => {
  return (
    <>
      <Helmet>
        <title>Nouvel section FAQ - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <Back link="/admin/faq" />
        <div className="intro">
          <h4>Ajouter une section</h4>
        </div>
        <FormFAQSection />
      </main>
    </>
  );
};

export default NewFAQSection;
