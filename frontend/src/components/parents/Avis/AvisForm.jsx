import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "../../shared/Button";

const AvisForm = () => {
  const formRef = useRef(null);
  const [submited, setSubmited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const newAvis = {
      prenom: formData.get("prenom"),
      nom: formData.get("nom"),
      avis: formData.get("message"),
      etablissement: formData.get("etablissement"),
    };

    navigator.clipboard.writeText(newAvis.avis);

    try {
      await axios.post("http://localhost:5001/avis", newAvis);

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
          <div className="form-part">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Entrez votre prénom"
            />
          </div>
          <div className="form-part">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="form-part">
            <label htmlFor="message">Avis</label>
            <textarea
              name="message"
              id="message"
              placeholder="Entrez votre avis"
            ></textarea>
          </div>
          <div className="form-part">
            <label htmlFor="etablissement">Etablissement</label>
            <select name="etablissement" id="selectedEtablissement">
              <option value="">
                Sélectionner l'établissement de votre enfant
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
