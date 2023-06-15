import React from "react";
import RoleParentsInfos from "./RoleParentsInfos";

const RolesParentsInfos = () => {
  return (
    <section className="roles-parents">
      <h2>Le role des parents</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        qui recusandae eius labore quas excepturi eaque pariatur officia eos.
      </p>
      <div className="roles-container">
        <RoleParentsInfos />
        <RoleParentsInfos />
        <RoleParentsInfos />
      </div>
    </section>
  );
};

export default RolesParentsInfos;
