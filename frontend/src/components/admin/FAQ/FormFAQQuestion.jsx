import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormFAQQuestion = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [selectedEtablissement, setSelectedEtablissement] = useState("");

  const [sectionTitles, setSectionTitles] = useState([]);

  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);

    if (selectedValue) {
      axios
        .get(`http://localhost:5001/faqSection${selectedValue}`)
        .then((res) => {
          setSectionTitles(res.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des sections :", error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const newQuestion = {
      section_id: formData.get("selectedSection"),
      question: formData.get("question"),
      question_answer: formData.get("answer"),
    };

    axios
      .post(
        `http://localhost:5001/faqQuestion${selectedEtablissement}`,
        newQuestion
      )
      .then((res) => {
        navigate("/admin/FAQ");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      });
  };

  return (
    <div className="form-faq-question">
      <div className="etablissement-select">
        <label htmlFor="SelectOption">Établissement de la FAQ : </label>

        <select
          id="SelectEtablissement"
          value={selectedEtablissement}
          onChange={handleEtablissementChange}
        >
          <option value="">Sélectionner l'établissement</option>
          <option value="College">Collège</option>
          <option value="School">École</option>
        </select>
      </div>
      {sectionTitles.length > 0 ? (
        <form ref={formRef} onSubmit={handleSubmit}>
          <select id="select-section" name="selectedSection">
            <option value="">Sélectionner une section</option>
            {sectionTitles.map((sectionTitle) => (
              <option value={sectionTitle._id} key={sectionTitle._id}>
                {sectionTitle.section_title}
              </option>
            ))}
          </select>

          <div className="question">
            <label htmlFor="question">La question :</label>
            <input type="text" id="question" name="question" />
          </div>
          <div className="answer">
            <label htmlFor="answer">La réponse :</label>
            <textarea id="answer" name="answer"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>
          Veuillez sélectionner l'établissement pour lequel vous voulez ajouter
          une question
        </p>
      )}
    </div>
  );
};

export default FormFAQQuestion;
