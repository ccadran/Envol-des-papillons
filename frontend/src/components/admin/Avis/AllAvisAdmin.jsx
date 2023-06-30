import { set } from "mongoose";
import React, { useState } from "react";
import axios from "axios";
import AvisAdmin from "./AvisAdmin";

const AllAvisAdmin = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [avis, setAvis] = useState([]);
  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);

    if (selectedValue) {
      axios
        .get("http://localhost:5001/avis", {
          params: {
            etablissement: selectedValue,
          },
        })
        .then((res) => {
          setAvis(res.data);
          console.log(avis);
        });
    }
  };
  return (
    <section className="avis">
      <div className="etablissement">
        <select
          id="selectedEtablissement"
          onChange={handleEtablissementChange}
          value={selectedEtablissement}
        >
          <option value="">Sélectionner l'établissement</option>
          <option value="collège">école</option>
          <option value="école">collège</option>
        </select>
      </div>
      <div className="avis-container">
        {selectedEtablissement ? (
          avis.map((avi) => <AvisAdmin key={avi._id} avis={avi} />)
        ) : (
          <h3>Veuillez séléctionner un établissement</h3>
        )}
      </div>
    </section>
  );
};

export default AllAvisAdmin;
