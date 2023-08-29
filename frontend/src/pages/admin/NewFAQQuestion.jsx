import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import FormFAQQuestion from "../../components/admin/FAQ/FormFAQQuestion";
import "styles/admin/FAQ/_newSection.scss";
import { Helmet } from "react-helmet";
import Back from "components/shared/Back";

const NewFAQQuestion = () => {
  return (
    <>
      <Helmet>
        <title>Nouvel question FAQ - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <Back link="/admin/faq" />
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
