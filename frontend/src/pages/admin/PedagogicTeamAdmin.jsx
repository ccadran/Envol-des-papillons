import H1HeroText from "components/shared/H1HeroText";
import NavigationAdmin from "components/admin/NavigationAdmin";
import React, { useState } from "react";
import AllTeacher from "components/admin/Professeurs/AllTeacher";
// import "styles/ecole&college/Presentation/_pedagogicTeam.scss";
import "styles/admin/Teachers/_pedagogicTeamAdmin.scss";

const PedagogicTeamAdmin = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  return (
    <>
      <NavigationAdmin />
      <main>
        <H1HeroText
          h1="Équipe pédagogique"
          text="Gérez l'équipe pédagogique de votre établissement"
        />
        <AllTeacher />
      </main>
    </>
  );
};

export default PedagogicTeamAdmin;
