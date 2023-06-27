import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import { Link, useNavigate } from "react-router-dom";
import FormFAQSection from "../../components/admin/FAQ/FormFAQSection";

const NewFAQSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationAdmin />
      <Link to="/admin/faq">Retour</Link>
      <div className="intro">
        <h4>Ajouter une section</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet
          ipsa explicabo architecto qui reiciendis, fugiat dolores vero voluptas
          porro dignissimos consequuntur non saepe facilis ea. Reiciendis
          cupiditate distinctio unde.
        </p>
      </div>
      <FormFAQSection />
    </>
  );
};

export default NewFAQSection;
