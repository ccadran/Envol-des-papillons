import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import { Link, useNavigate } from "react-router-dom";
import FormFAQSection from "../../components/admin/FAQ/FormFAQSection";
import "styles/admin/FAQ/_newSection.scss";
import chevron from "assets/logos/chevron.svg";

const NewFAQSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationAdmin />
      <main>
        <div className="back">
          <img src={chevron} alt="" />
          <Link to="/admin/faq">Retour</Link>
        </div>
        <div className="intro">
          <h4>Ajouter une section</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet
            ipsa explicabo architecto qui reiciendis, fugiat dolores vero
            voluptas porro dignissimos consequuntur non saepe facilis ea.
            Reiciendis cupiditate distinctio unde.
          </p>
        </div>
        <FormFAQSection />
      </main>
    </>
  );
};

export default NewFAQSection;
