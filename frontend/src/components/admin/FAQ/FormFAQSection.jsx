import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormFAQSection = ({}) => {
  const navigate = useNavigate();

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSection = { section_title: sectionTitle };
    axios
      .post(`http://localhost:5001/faqSection${selectedOption}`, newSection)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/FAQ");
        // Effectuer les actions supplémentaires si nécessaire, comme la mise à jour de l'état des sections
      })
      .catch((error) => {
        console.error(error);
        // Gérer les erreurs si nécessaire
      });
    setSectionTitle("");
  };
  console.log(sectionTitle);
  return (
    <div className="form-faq-section">
      <div className="etablissement-select">
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
      </form>
    </div>
  );
};

export default FormFAQSection;
