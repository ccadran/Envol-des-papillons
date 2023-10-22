import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormNewMail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [childNames, setChildNames] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (id, value) => {
    console.log(id, value);
    const updatedChildNames = childNames.map((child) =>
      child.id === id ? { ...child, value } : child
    );
    setChildNames(updatedChildNames);
    console.log(childNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one child name is filled
    const hasFilledChildName = childNames.some(
      (child) => child.value.trim() !== ""
    );

    if (!hasFilledChildName) {
      setErrorMessage("Veuillez entrer au moins un nom d'enfant.");
      return;
    }

    const newMail = {
      email,
      childNames: childNames.map((child) => child.value.trim()).filter(Boolean),
    };
    console.log(newMail);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/mail-parent`, newMail);
      console.log("Mail added successfully!", newMail);
      navigate("/admin/mails");
      setEmail("");
      setChildNames([
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" },
      ]);
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding mail:", error);
      setErrorMessage("Veuillez rentrer une adresse mail valide");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-new-mail">
      <div className="form-mail">
        <label htmlFor="mail">Mail du parent</label>
        <input
          type="text"
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="childNames">Le nom des enfants :</label>
        {childNames.map((child) => (
          <input
            key={child.id}
            type="text"
            value={child.value}
            onChange={(e) => handleInputChange(child.id, e.target.value)}
          />
        ))}
      </div>
      <button type="submit">Ajouter le mail</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default FormNewMail;
