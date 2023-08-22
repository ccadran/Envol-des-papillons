import NavigationGlobal from "components/shared/NavigationGlobal";
import React from "react";
import { Helmet } from "react-helmet";

const InscriptionParent = () => {
  return (
    <>
      <Helmet>
        <title>Inscription - Parents</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationGlobal />
      <InscriptionParent />
    </>
  );
};

export default InscriptionParent;
