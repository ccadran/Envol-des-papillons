import React from "react";
import { useLocation } from "react-router-dom";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import FooterGlobal from "../../components/shared/FooterGlobal";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import H1HeroText from "../../components/shared/H1HeroText";
import BlogContent from "../../components/etablissement/Blog/BlogContent";
import "styles/etablissement/Blog/_blog.scss";
import { Helmet } from "react-helmet";
const Blog = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/etablissement/blog";
  const desiredPart = location.pathname.split("/")[1];
  return (
    <>
      <Helmet>
        <title>Blog - L'envol des papillons</title>
        <meta
          name="description"
          content="Découvrez les articles de blog de notre établissement L'envol des papillons , traitant de la pédagogie Montessori, de l'actualité des enfants et bien d'autres...
"
        />
      </Helmet>
      {isRootPath ? (
        <NavigationGlobal />
      ) : (
        <NavigationScolarity etablissement={desiredPart} />
      )}{" "}
      <main>
        <H1HeroText
          h1="Le blog"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad  diam sit amet lacinia. Aliquam in elementum tellus."
        />
        <BlogContent />
      </main>
      {isRootPath ? (
        <FooterGlobal />
      ) : (
        <FooterScolarity etablissement={desiredPart} />
      )}{" "}
    </>
  );
};

export default Blog;
