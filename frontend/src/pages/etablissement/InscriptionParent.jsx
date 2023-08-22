import InscriptionFormParent from "components/parents/InscriptionFormParent";
import NavigationGlobal from "components/shared/NavigationGlobal";
import React from "react";
import { Helmet } from "react-helmet";

const InscriptionParent = () => {
  return (
    <>
      <Helmet>
        <title>Blog - L'envol des papillons</title>
        <meta name="description" content="Description de Ma Page" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NavigationGlobal />
      <InscriptionFormParent />
    </>
  );
};

export default InscriptionParent;
