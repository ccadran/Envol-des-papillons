import axios from "axios";
import React, { useState } from "react";

const Mail = ({ mail }) => {
  const handleDeleteMail = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/mail-parent/${mail._id}`);
    console.log("mail supprimé");
  };
  const handleEditMail = () => {
    setIsEditing(!isEditing);
    setEditedMail(mail.email);
    setEditedChildNames(mail.childNames.map((childName) => childName)); // Copy the array of child names
  };

  const handleSaveMail = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/mail-parent/${mail._id}`, {
        email: editedMail,
        childName: editedChildNames[0], // Update childName
        childName2: editedChildNames[1], // Update childName2
        childName3: editedChildNames[2], // Update childName3 // Send the updated array of child names
      })
      .then(() => {
        setIsEditing(false);
      });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedMail, setEditedMail] = useState("");
  const [editedChildNames, setEditedChildNames] = useState([]);

  const handleChangeChildName = (index, newName) => {
    const updatedChildNames = [...editedChildNames];
    updatedChildNames[index] = newName;
    setEditedChildNames(updatedChildNames);
  };

  return (
    <div className="mail-container">
      <div className="controller">
        <a className="fa-solid fa-pen" onClick={handleEditMail}></a>
        <a
          onClick={handleDeleteMail}
          className="fa-sharp fa-solid fa-trash"
        ></a>
      </div>
      {isEditing ? (
        <>
          <div className="infos-container">
            <div className="email-content">
              <h4>Le mail :</h4>
              <input
                type="text"
                value={editedMail}
                onChange={(e) => setEditedMail(e.target.value)}
              />
            </div>
            <div className="child-content">
              <h4>Les enfants :</h4>
              <div className="childs">
                {editedChildNames.map((childName, index) => (
                  <input
                    key={index}
                    type="text"
                    value={childName}
                    onChange={(e) =>
                      handleChangeChildName(index, e.target.value)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <button onClick={handleSaveMail}>Valider</button>
        </>
      ) : (
        <div className="infos-container">
          <div className="email-content">
            <h4>Le mail :</h4>
            <p>{mail.email}</p>
          </div>
          <div className="child-content">
            <h4>Les enfants :</h4>
            <div className="childs">
              {mail.childNames.map((childName, index) => (
                <p key={index}>{childName}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mail;
