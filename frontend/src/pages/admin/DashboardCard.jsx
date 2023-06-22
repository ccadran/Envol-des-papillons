import React from "react";
import Button from "../../components/shared/Button";

const DashboardCard = ({ title, text, link }) => {
  return (
    <div className="dashboard-card">
      <h4>{title} </h4>
      <div className="card-content">
        <p> {text}</p>
        <div className="card-infos">
          <p></p>
          <p></p>
          <Button text="voir" color="violet" link={link} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
