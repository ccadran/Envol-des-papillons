import NavigationAdmin from "components/admin/NavigationAdmin";
import React from "react";
import { Helmet } from "react-helmet";
import FormTag from "components/admin/Tag/FormTag";
import "styles/admin/Tags/_newTag.scss";
import Back from "components/shared/Back";

const NewTag = () => {
  return (
    <>
      <Helmet>
        <title>Nouveau tag - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <Back link="/admin/blog" />
        <div className="intro">
          <h4>Ajouter un tag</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            beatae excepturi, autem esse tempore deserunt perspiciatis similique
            repellendus ratione culpa veritatis suscipit natus eius modi
            consequuntur sunt saepe numquam quam.
          </p>
        </div>
        <FormTag />
      </main>
    </>
  );
};

export default NewTag;
