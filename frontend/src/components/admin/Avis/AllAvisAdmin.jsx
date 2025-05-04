import { set } from "mongoose";
import React, { useState } from "react";
import axios from "axios";
import AvisAdmin from "./AvisAdmin";
import "styles/admin/Avis/_avisAdmin.scss";

const AllAvisAdmin = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [avis, setAvis] = useState([]);
  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);
    console.log(selectedValue);

    if (selectedValue) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/avis`, {
          params: {
            etablissement: selectedValue,
          },
        })
        .then((res) => {
          setAvis(res.data);
        });
    }
  };
  return (
    <section className="avis-admin">
      <div className="etablissement">
        <label htmlFor="selectedEtablissement">
          Les avis de l'établissement :
        </label>
        <select
          id="selectedEtablissement"
          onChange={handleEtablissementChange}
          value={selectedEtablissement}
        >
          <option value="">Sélectionner l'établissement</option>
          <option value="collège">collège</option>
          <option value="école">école</option>
        </select>
      </div>
      <div className="avis-container">
        {selectedEtablissement ? (
          avis.map((avi) => <AvisAdmin key={avi._id} avis={avi} />)
        ) : (
          <h3>Veuillez sélectionner un établissement</h3>
        )}
      </div>
    </section>
  );
};

export default AllAvisAdmin;
