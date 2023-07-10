import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import ConnexionFormAdmin from "../../components/admin/ConnexionFormAdmin";
const ConnexionAdmin = () => {
  return (
    <div>
      <NavigationGlobal />
      <main>
        <ConnexionFormAdmin />
      </main>
    </div>
  );
};

export default ConnexionAdmin;
