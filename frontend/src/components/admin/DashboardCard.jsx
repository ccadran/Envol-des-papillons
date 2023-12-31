import React from "react";
import Button from "../shared/Button";

const DashboardCard = ({ title, text, link }) => {
  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      <div className="card-content">
        <p>{text}</p>
        <Button text="voir plus" color="violet" link={link} />
      </div>
    </div>
  );
};

export default DashboardCard;
