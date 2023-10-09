import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "../../shared/Button";

const AvisForm = () => {
  const formRef = useRef(null);
  const [submited, setSubmited] = useState(false);
  const [formErrors, setFormErrors] = useState({
    prenom: false,
    nom: false,
    avis: false,
    etablissement: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const newAvis = {
      prenom: formData.get("prenom"),
      nom: formData.get("nom").toUpperCase(),
      avis: formData.get("message"),
      etablissement: formData.get("etablissement"),
    };

    // Vérification des champs et gestion des erreurs
    const errors = {};

    if (!newAvis.prenom) {
      errors.prenom = true;
    }
    if (!newAvis.nom) {
      errors.nom = true;
    }
    if (!newAvis.avis) {
      errors.avis = true;
    }
    if (!newAvis.etablissement) {
      errors.etablissement = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    navigator.clipboard.writeText(newAvis.avis);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/avis`, newAvis);

      setSubmited(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'avis :", error);
    }

    formRef.current.reset();
  };

  return (
    <>
      {submited ? (
        <div className="avis-google">
          <h4>Merci pour votre avis</h4>
          <p>
            Merci beaucoup pour votre retour, cela nous aiderait beaucoup que
            vous en laissiez un également sur Google. Pour cela, il vous suffit
            de cliquer sur le lien et de coller l'avis que nous avons copié pour
            vous dans votre presse-papier.
          </p>
          <Button
            text="Mettre un avis Google"
            color="violet"
            link="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TLcosDCOL0gyYLRSMahIMTU1sjAzTTNNTTRPNLG0MqhINE-zsEg0szBJTkkxMEq08BJOzSvLz1FISS1WKEgsyMzJyc8rBgAKqhZy&q=envol+des+papillons&rlz=1C1VDKB_frFR990FR990&oq=envol+des+&aqs=chrome.1.69i57j46i175i199i512j0i512j46i175i199i512j0i512j69i60l3.5780j0j7&sourceid=chrome&ie=UTF-8#lrd=0xd552865f5ea7a49:0xa7f88a684cdd02a8,3,,,,"
          />
        </div>
      ) : (
        <form className="avis" ref={formRef} onSubmit={handleSubmit}>
          <div className={`form-part ${formErrors.prenom ? "error" : ""}`}>
            {" "}
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Entrez votre prénom"
            />
            {formErrors.prenom && (
              <p className="error-message">Le prénom obligatoire</p>
            )}
          </div>
          <div className={`form-part ${formErrors.nom ? "error" : ""}`}>
            {" "}
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="Entrez votre nom"
            />
            {formErrors.nom && (
              <p className="error-message">Le nom obligatoire</p>
            )}
          </div>

          <div className={`form-part ${formErrors.avis ? "error" : ""}`}>
            {" "}
            <label htmlFor="message">Avis</label>
            <textarea
              name="message"
              id="message"
              placeholder="Entrez votre avis"
            ></textarea>
            {formErrors.avis && (
              <p className="error-message">Un message d'avis obligatoire</p>
            )}
          </div>
          <div
            className={`form-part ${formErrors.etablissement ? "error" : ""}`}
          >
            {" "}
            <label htmlFor="etablissement">Etablissement</label>
            <select name="etablissement" id="selectedEtablissement">
              <option value="">
                Sélectionner l'établissement de votre enfant
              </option>
              <option value="école">École</option>
              <option value="college">Collège</option>
            </select>
            {formErrors.etablissement && (
              <p className="error-message">
                Choisissez l'établissement dont il est question dans l'avis
              </p>
            )}
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
