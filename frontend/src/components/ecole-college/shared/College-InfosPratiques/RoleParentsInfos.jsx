import React from "react";

const RoleParentsInfos = ({ title, text }) => {
  return (
    <article className="role-parent">
      <h4>{title}</h4>
      <p> {text}</p>
    </article>
  );
};

export default RoleParentsInfos;
