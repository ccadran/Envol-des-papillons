import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import ConnexionFormParents from "../../components/parents/ConnexionFormParents";
import "styles/parents/_connexionParents.scss";
import { Helmet } from "react-helmet";
const ConnexionParents = () => {
  return (
    <>
      <Helmet>
        <title>Connexion - Parents</title>
        <meta name="description" content="Description de Ma Page" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NavigationGlobal />
      <ConnexionFormParents />
    </>
  );
};

export default ConnexionParents;
