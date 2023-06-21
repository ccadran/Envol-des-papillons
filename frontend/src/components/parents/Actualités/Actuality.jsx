import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";

const Actuality = ({ actuality }) => {
  return (
    <Link to={`/parents/actualites/${actuality._id}`}>
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
    </Link>
  );
};

export default Actuality;
