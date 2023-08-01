import React, { useState } from "react";
import axios from "axios";
import { set } from "mongoose";

const FormNewMail = () => {
  const [email, setEmail] = useState("");
  const [childNames, setChildNames] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);

  const handleInputChange = (id, value) => {
    // Update the childNames state based on the id of the input being changed
    const updatedChildNames = childNames.map((child) =>
      child.id === id ? { ...child, value } : child
    );
    setChildNames(updatedChildNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new mail object with the email and childNames fields
    const newMail = {
      email,
      childName: childNames[0].value,
      childName2: childNames[1].value,
      childName3: childNames[2].value,
    };
    console.log(newMail);
    setEmail("");
    setChildNames(["", "", ""]);

    // Send the new mail object to the server
    axios
      .post("http://localhost:5001/mail-parent", newMail)
      .then((res) => {
        // Handle the response if needed
        console.log("Mail added successfully!");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error adding mail:", error);
      });
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
    </form>
  );
};

export default FormNewMail;
