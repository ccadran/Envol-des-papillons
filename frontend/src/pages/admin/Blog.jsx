import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import BlogContent from "../../components/etablissement/Blog/BlogContent";
import H1HeroText from "../../components/shared/H1HeroText";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText h1="Blog" text="Gérez les articles de votre blog" />
        <BlogContent />
      </main>
    </>
  );
};

export default Blog;
