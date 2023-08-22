import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTeacher = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const newTeacher = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      classe: formData.get("classe"),
      poste: formData.get("poste"),
      formation: formData.get("formation"),
      etablissement: formData.get("etablissement"),
    };

    if (
      !newTeacher.firstName ||
      !newTeacher.lastName ||
      !newTeacher.classe ||
      !newTeacher.poste ||
      !newTeacher.formation
    ) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (newTeacher.etablissement === "") {
      setErrorMessage("Veuillez sélectionner l'établissement.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5001/teacher",
        newTeacher
      );
      navigate("/admin/teachers");
      formRef.current.reset();
    } catch (error) {
      console.error("Erreur lors de l'ajout du professeur :", error);
      setErrorMessage(
        "Une erreur s'est produite lors de l'ajout du professeur."
      );
    }
  };

  return (
    <div className="form-teacher">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="etablissement-select">
          <select id="SelectOption" name="etablissement">
            <option value="">Sélectionner l'établissement</option>
            <option value="collège">Collège</option>
            <option value="école">École</option>
          </select>
        </div>

        <label>Prénom:</label>
        <input type="text" placeholder="Prénom" name="firstName" />

        <label>Nom:</label>
        <input type="text" placeholder="Nom" name="lastName" />

        <label>Classe:</label>
        <input type="text" placeholder="Classe" name="classe" />

        <label>Poste:</label>
        <input type="text" placeholder="Poste" name="poste" />

        <label>Formation:</label>
        <input type="text" placeholder="Formation" name="formation" />

        <button type="submit">Ajouter</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default FormTeacher;
