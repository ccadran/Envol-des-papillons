import React from "react";
import Tags from "./Tags";

const Actuality = ({ actuality }) => {
  return (
    <div className="actuality">
      <div className="actuality-info">
        <h4>{actuality.title}</h4>
        <p>{actuality.accroche}</p>
        <Tags />
      </div>
      <div className="actuality-img">
        <img src="" alt="image principal actualité" />
      </div>
    </div>
  );
};

export default Actuality;
