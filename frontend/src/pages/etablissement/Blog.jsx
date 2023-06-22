import React from "react";
import { useLocation } from "react-router-dom";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import FooterGlobal from "../../components/shared/FooterGlobal";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import BlogContent from "../../components/etablissement/Blog/BlogContent";
const Blog = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/contact";
  const desiredPart = location.pathname.split("/")[1];
  return (
    <>
      {isRootPath ? (
        <NavigationGlobal />
      ) : (
        <NavigationScolarity etablissement={desiredPart} />
      )}{" "}
      <H1HeroText
        h1="Le blog"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad  diam sit amet lacinia. Aliquam in elementum tellus."
      />
      <BlogContent />
      {isRootPath ? (
        <FooterGlobal />
      ) : (
        <FooterScolarity etablissement={desiredPart} />
      )}{" "}
    </>
  );
};

export default Blog;
