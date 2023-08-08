import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTeacher = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
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

    console.log(newTeacher);

    axios
      .post("http://localhost:5001/teacher", newTeacher)
      .then((response) => {
        navigate("/admin/teachers");
        console.log("Nouveau professeur ajouté avec succès !");
        formRef.current.reset(); // Réinitialisation du formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du professeur :", error);
      });
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
      </form>
    </div>
  );
};

export default FormTeacher;
