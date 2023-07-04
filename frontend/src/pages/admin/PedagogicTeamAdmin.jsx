import H1HeroText from "components/shared/H1HeroText";
import NavigationAdmin from "components/admin/NavigationAdmin";
import React, { useState } from "react";
import AllTeacher from "components/admin/Professeurs/AllTeacher";

const PedagogicTeamAdmin = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  return (
    <>
      <NavigationAdmin />
      <H1HeroText
        h1="Équipe pédagogique"
        text="Gérez l'équipe pédagogique de votre établissement"
      />
      <AllTeacher />
    </>
  );
};

export default PedagogicTeamAdmin;
