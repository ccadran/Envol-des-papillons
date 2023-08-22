import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { set } from "mongoose";

const FormFAQQuestion = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [sectionTitles, setSectionTitles] = useState([]);
  const [error, setError] = useState("");

  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);
    setError(""); // Réinitialiser l'erreur en cas de changement d'établissement

    if (selectedValue) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/faqSection${selectedValue}`)
        .then((res) => {
          setSectionTitles(res.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des sections :", error);
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedEtablissement) {
      setError("Veuillez sélectionner un établissement.");
      return;
    }

    const formData = new FormData(formRef.current);

    const newQuestion = {
      section_id: formData.get("selectedSection"),
      question: formData.get("question"),
      question_answer: formData.get("answer"),
    };
    try {
      if (
        !newQuestion.section_id ||
        !newQuestion.question ||
        !newQuestion.question_answer
      ) {
        setError("Veuillez remplir tous les champs.");
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/faqQuestion${selectedEtablissement}`,
          newQuestion
        );
        navigate("/admin/FAQ");
        formRef.current.reset();
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de l'ajout de la question. Vérifier que tous les champs sont remplis."
      );
    }
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
          <p className="error">{error}</p>
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
