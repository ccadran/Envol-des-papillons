import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "../../shared/Button";
const AvisForm = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [avis, setAvis] = useState("");
  const [etablissement, setEtablissement] = useState("école");
  const [submited, setSubmited] = useState(false);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données vers votre backend Node.js ici
    const formData = { prenom, nom, avis, etablissement };
    navigator.clipboard.writeText(avis);

    setSubmited(true);
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
    <>
      {submited ? (
        <div className="avis-google">
          <h4>Merci pour votre avis</h4>
          <p>
            Merci beaucoup pour votre retour, cle anous aiderait beaucoup que
            vous en laissiez un également sur Google. Pour cela vous avez
            seulement à cliquer sur le lien et a collé l'avis que nous avons
            copié pour vous dans votre presse papier
          </p>
          <Button text="Laissez un avis sur Google" color="violet" />
        </div>
      ) : (
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
            ref={messageRef}
            placeholder="Entrez votre avis"
            value={avis}
            onChange={(e) => setAvis(e.target.value)}
          ></textarea>
          <input type="submit" value="Laissez votre avis" />
        </form>
      )}
    </>
  );
};

export default AvisForm;