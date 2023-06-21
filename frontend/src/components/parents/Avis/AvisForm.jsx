import React, { useState } from "react";
import axios from "axios";
const AvisForm = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [avis, setAvis] = useState("");
  const [etablissement, setEtablissement] = useState("école");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données vers votre backend Node.js ici
    const formData = { prenom, nom, avis, etablissement };
    console.log(formData);
    // Effectuez une requête HTTP (par exemple, avec axios) pour envoyer les données
    axios
      .post("http://localhost:5001/avis", formData)
      .then((response) => {
        // Gérez la réponse du serveur
      })
      .catch((error) => {
        // Gérez les erreurs
      });

    // Réinitialisez les valeurs du formulaire après la soumission
    setPrenom("");
    setNom("");
    setAvis("");
    setEtablissement("école");
  };

  return (
    <form action="" className="avis" onSubmit={handleSubmit}>
      <label htmlFor="prenom">Prénom</label>
      <input
        type="text"
        name="prenom"
        id="prenom"
        placeholder="Entrez votre prénom"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
      />
      <label htmlFor="nom">Nom</label>
      <input
        type="text"
        name="nom"
        id="nom"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <label htmlFor="etablissement">Etablissement</label>
      <input
        type="text"
        name="etablissement"
        id="etablissement"
        placeholder="Entrez votre etablissement"
        value={etablissement}
        onChange={(e) => setEtablissement(e.target.value)}
      />
      <label htmlFor="message">Avis</label>
      <textarea
        name="message"
        id="message"
        value={avis}
        onChange={(e) => setAvis(e.target.value)}
      ></textarea>
      <input type="submit" value="Laissez votre avis" />
    </form>
  );
};

export default AvisForm;
