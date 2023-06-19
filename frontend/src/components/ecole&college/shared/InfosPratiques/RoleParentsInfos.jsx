import React from "react";

const RoleParentsInfos = ({ title, text }) => {
  return (
    <div className="role-parent">
      <h4>{title}</h4>
      <p> {text}</p>
    </div>
  );
};

export default RoleParentsInfos;
