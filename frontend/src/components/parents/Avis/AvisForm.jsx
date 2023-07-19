import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "../../shared/Button";
const AvisForm = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [avis, setAvis] = useState("");
  const [etablissement, setEtablissement] = useState("");
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
          <Button
            text="Mettre un avis Google "
            color="violet"
            link="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TLcosDCOL0gyYLRSMahIMTU1sjAzTTNNTTRPNLG0MqhINE-zsEg0szBJTkkxMEq08BJOzSvLz1FISS1WKEgsyMzJyc8rBgAKqhZy&q=envol+des+papillons&rlz=1C1VDKB_frFR990FR990&oq=envol+des+&aqs=chrome.1.69i57j46i175i199i512j0i512j46i175i199i512j0i512j69i60l3.5780j0j7&sourceid=chrome&ie=UTF-8#lrd=0xd552865f5ea7a49:0xa7f88a684cdd02a8,3,,,,"
          />
        </div>
      ) : (
        <form action="" className="avis" onSubmit={handleSubmit}>
          <div className="form-part">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Entrez votre prénom"
              value={prenom}
              onChange={(event) => setPrenom(event.target.value)}
            />
          </div>
          <div className="form-part">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="form-part">
            <label htmlFor="message">Avis</label>
            <textarea
              name="message"
              id="message"
              ref={messageRef}
              placeholder="Entrez votre avis"
              value={avis}
              onChange={(e) => setAvis(e.target.value)}
            ></textarea>
          </div>
          <div className="form-part">
            <label htmlFor="etablissement">Etablissement</label>
            <select
              name="etablissement"
              id="selectedEtablissement"
              onChange={(e) => setEtablissement(e.target.value)}
            >
              <option value="">
                Séléctionner l'établissement de votre enfant{" "}
              </option>
              <option value="école">École</option>
              <option value="college">Collège</option>
            </select>
          </div>
          <button type="submit" value="">
            Laissez votre avis
          </button>
        </form>
      )}
    </>
  );
};

export default AvisForm;
