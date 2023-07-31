import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import ConnexionFormParents from "../../components/parents/ConnexionFormParents";
import "styles/parents/_connexionParents.scss";
const ConnexionParents = () => {
  return (
    <>
      <NavigationGlobal />
      <ConnexionFormParents />
      <div className="margin-bottom"></div>
    </>
  );
};

export default ConnexionParents;
