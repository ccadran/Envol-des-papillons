import React from "react";
import RoleParentsInfos from "./RoleParentsInfos";

const RolesParentsInfos = ({ text }) => {
  return (
    <section className="roles-parents">
      <h3>Le role des parents</h3>
      <p>{text}</p>
      <div className="roles-container">
        <RoleParentsInfos
          title="Les fêtes"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
        <RoleParentsInfos
          title="Nettoyage"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
        <RoleParentsInfos
          title="Sortie scolaire"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
      </div>
    </section>
  );
};

export default RolesParentsInfos;
