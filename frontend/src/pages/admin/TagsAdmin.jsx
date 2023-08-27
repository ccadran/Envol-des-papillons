import NavigationAdmin from "components/admin/NavigationAdmin";
import AllTags from "components/admin/Tag/AllTags";
import H1HeroText from "components/shared/H1HeroText";
import React from "react";
import { Helmet } from "react-helmet";
import "styles/admin/Tags/_tags.scss";

const Tags = () => {
  return (
    <>
      <Helmet>
        <title>Tags - ADMIN</title>
        <meta name="description" content=" de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="Tags" text="Gérez les tags de votre blog" />
        <AllTags />
      </main>
    </>
  );
};

export default Tags;
