import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FormTeacher = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [classe, setClasse] = useState("");
  const [poste, setPoste] = useState("");
  const [formation, setFormation] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = {
      firstName: firstName,
      lastName: lastName,
      classe: classe,
      poste: poste,
      formation: formation,
      etablissement: selectedOption,
    };

    axios
      .post("http://localhost:5001/teacher", newTeacher)
      .then((response) => {
        navigate("/admin/teachers");
        console.log("Nouveau professeur ajouté avec succès !");
        // Réinitialiser les champs du formulaire
        setFirstName("");
        setLastName("");
        setClasse("");
        setPoste("");
        setFormation("");
        setSelectedOption("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du professeur :", error);
      });
  };

  return (
    <div className="form-teacher">
      <form onSubmit={handleSubmit}>
        <div className="etablissement-select">
          <select
            id="SelectOption"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Sélectionner l'établissement</option>
            <option value="collège">Collège</option>
            <option value="école">École</option>
          </select>
        </div>
        <form action="">
          <label>Prénom:</label>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Nom:</label>
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Classe:</label>
          <input
            type="text"
            placeholder="Classe"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          />

          <label>Poste:</label>
          <input
            type="text"
            placeholder="Poste"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
          />
          <label>Formation:</label>
          <input
            type="text"
            placeholder="Formation"
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
          />

          <button type="submit">Ajouter</button>
        </form>
      </form>
    </div>
  );
};

export default FormTeacher;
