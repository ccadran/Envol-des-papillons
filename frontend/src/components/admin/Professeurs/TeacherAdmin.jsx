import React, { useState } from "react";
import PapillonLogo from "components/shared/PapillonLogo";
import { Link } from "react-router-dom";
import axios from "axios";

const TeachersAdmin = ({ teacher }) => {
  const [firstName, setFirstName] = useState(teacher.firstName);
  const [lastName, setLastName] = useState(teacher.lastName);
  const [classe, setClasse] = useState(teacher.classe);
  const [poste, setPoste] = useState(teacher.poste);
  const [formation, setFormation] = useState(teacher.formation);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedTeacher = {
      firstName: firstName,
      lastName: lastName,
      classe: classe,
      poste: poste,
      formation: formation,
    };

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/teacher/` + teacher._id,
        updatedTeacher
      )
      .then((response) => {
        console.log("Modifications enregistrées avec succès !");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'enregistrement des modifications :",
          error
        );
      });
  };

  const deleteTeacher = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/teacher/` + teacher._id)
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    <div className="teacher-card">
      <div className="controller">
        <a className="fa-sharp fa-solid fa-trash" onClick={deleteTeacher}></a>
        {!isEditing && (
          <a className="fa-solid fa-pen" onClick={handleEditClick}></a>
        )}
      </div>
      <PapillonLogo />
      {isEditing ? (
        <>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          />
          <input
            type="text"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
          />
          <textarea
            type="text"
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
          />
        </>
      ) : (
        <div className="teacher-info-admin">
          <div className="name-class">
            <h5>
              {teacher.firstName} {teacher.lastName}
            </h5>
            <p>{teacher.classe}</p>
          </div>
          <h5>{teacher.poste}</h5>
          <p>{teacher.formation}</p>
        </div>
      )}

      {isEditing && <button onClick={handleSaveClick}>Enregistrer</button>}
    </div>
  );
};

export default TeachersAdmin;
