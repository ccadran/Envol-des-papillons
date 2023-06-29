import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { set } from "mongoose";

const FormFAQQuestion = () => {
  const navigate = useNavigate();
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [sectionTitles, setSectionTitles] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);

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

  const handleSectionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSection(selectedValue);
  };

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
  };

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedSection);
    // Créez un objet contenant les données du formulaire
    const formData = {
      section_id: selectedSection,
      question: question,
      question_answer: answer,
    };

    // Envoyez les données à votre backend en utilisant la méthode POST d'axios
    axios
      .post(
        `http://localhost:5001/faqQuestion${selectedEtablissement}`,
        formData
      )
      .then((res) => {
        // Traitez la réponse du backend si nécessaire
        console.log(res.data);

        // Réinitialisez les valeurs du formulaire
        setSelectedEtablissement("");
        setSelectedSection("");
        setQuestion("");
        setAnswer("");

        // Naviguez vers une autre page si nécessaire
        navigate("/admin/FAQ"); // Remplacez "/success" par le chemin de la page de succès de votre choix
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      });
  };

  return (
    <div className="form-faq-question">
      <div className="etablissement-select">
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
      {selectedEtablissement ? (
        <form onSubmit={handleSubmit}>
          <select
            id="select-section"
            onChange={handleSectionChange}
            value={selectedSection}
          >
            <option value="">Sélectionner une section</option>
            {sectionTitles.map((sectionTitle) => (
              <option value={sectionTitle._id} key={sectionTitle._id}>
                {sectionTitle.section_title}
              </option>
            ))}
          </select>

          <div className="question">
            <label htmlFor="question">La question :</label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={handleQuestionChange}
            />
          </div>
          <div className="answer">
            <label htmlFor="answer">La réponse :</label>
            <textarea
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
            ></textarea>
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
