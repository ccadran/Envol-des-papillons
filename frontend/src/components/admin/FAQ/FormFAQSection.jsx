import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormFAQSection = ({}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Nouvel état pour gérer les erreurs

  const [sectionTitle, setSectionTitle] = useState({
    section_title: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleInputChange = (e) => {
    setSectionTitle(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError("Veuillez sélectionner un établissement.");
      return;
    }
    if (!sectionTitle.section_title) {
      setError("Le titre de la section est requis.");
      return;
    }

    const newSection = { section_title: sectionTitle.section_title };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/faqSection${selectedOption}`,
        newSection
      );

      navigate("/admin/FAQ");
      // Effectuer les actions supplémentaires si nécessaire, comme la mise à jour de l'état des sections
    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite lors de l'ajout de la section.");
    }

    setSectionTitle({ section_title: "" });
    setError(""); // Réinitialiser l'erreur après la soumission réussie
  };

  return (
    <div className="form-faq-section">
      <div className="etablissement-select">
        <label htmlFor="SelectOption">Établissement de la FAQ : </label>
        <select
          id="SelectOption"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Sélectionner l'établissement </option>
          <option value="College">Collège</option>
          <option value="School">École</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sectionTitle">Titre de la section :</label>
          <input
            type="text"
            id="sectionTitle"
            value={sectionTitle.section_title}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Ajouter</button>
        {error && <p className="error">{error}</p>}{" "}
      </form>
    </div>
  );
};

export default FormFAQSection;
