import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import { Link, useNavigate } from "react-router-dom";
import FormFAQQuestion from "../../components/admin/FAQ/FormFAQQuestion";
import chevron from "assets/logos/chevron.svg";
import "styles/admin/FAQ/_newSection.scss";

const NewFAQQuestion = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <div className="back">
          <Link to="/admin/faq">
            <img src={chevron} alt="" />
            Retour
          </Link>
        </div>{" "}
        <div className="intro">
          <h4>Ajouter une question</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            dolore dolores mollitia exercitationem velit expedita quis, amet
            doloremque saepe ad aperiam sequi cum earum aliquam vero ducimus
            qui. Perspiciatis, odio!
          </p>
        </div>
        <FormFAQQuestion />
      </main>
    </>
  );
};

export default NewFAQQuestion;
