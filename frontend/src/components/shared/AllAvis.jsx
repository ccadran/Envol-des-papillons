import React, { useEffect, useState } from "react";
import Avis from "./Avis";
import axios from "axios";
import { set } from "mongoose";

const AllAvis = ({ etablissement }) => {
  const [avis, setAvis] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/avis", {
        params: {
          etablissement: etablissement,
        },
      })
      .then((res) => {
        setAvis(res.data);
      });
  }, []);

  return (
    <div>
      <section className="avis">
        <h3>Les parents en parlent le mieux</h3>
        <div className="avis-container">
          {avis.map((avi) => (
            <Avis key={avi._id} avi={avi} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllAvis;
