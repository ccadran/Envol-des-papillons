import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import ConnexionFormAdmin from "../../components/admin/ConnexionFormAdmin";
import { Helmet } from "react-helmet";
const ConnexionAdmin = () => {
  return (
    <div>
      <Helmet>
        <title>Connexion - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationGlobal />

      <ConnexionFormAdmin />
    </div>
  );
};

export default ConnexionAdmin;
