import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { set } from "mongoose";

const FormFAQQuestion = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [sectionTitles, setSectionTitles] = useState([]);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      axios
        .get(`http://localhost:5001/faqSection${selectedValue}`)
        .then((res) => {
          setSectionTitles(res.data);
          console.log(sectionTitles);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des sections :", error);
        });
    }
  };

  return (
    <div className="form-faq-question">
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
      {selectedOption ? (
        <form action="">
          <select id="select-section">
            {sectionTitles.map((sectionTitle) => (
              <option value={sectionTitle._id} key={sectionTitle._id}>
                {sectionTitle.section_title}
              </option>
            ))}
          </select>
        </form>
      ) : (
        <p>
          Veuillez séléctionner l'établissement pour lequel vous voulez ajouter
          une question
        </p>
      )}
    </div>
  );
};

export default FormFAQQuestion;
