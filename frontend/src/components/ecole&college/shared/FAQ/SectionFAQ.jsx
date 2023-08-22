import React, { useEffect, useState } from "react";
import QuestionFAQ from "./QuestionFAQ";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../shared/Button";

const SectionFAQ = ({ faqSection, etablissement }) => {
  const [faqQuestions, setFaqQuestions] = useState([]);
  const location = useLocation();
  const [fetchData, setFetchData] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [sectionTitle, setSectionTitle] = useState(faqSection.section_title);

  const isRootPath =
    location.pathname === "/admin/FAQ" || location.pathname === "/admin/faq";

  const handleDeleteSection = (sectionId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/faqSection${etablissement}/${sectionId}`
      )
      .then((res) => {
        setFetchData(true);
      });
  };

  const handleEditSection = () => {
    setIsEditing(!isEditing);
  };

  const handleTextareaChange = (event) => {
    setSectionTitle(event.target.value);
  };

  const handleValidation = () => {
    // Effectuer les actions de validation ici
    setIsEditing(false);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/faqSection${etablissement}/${faqSection._id}`,
        { section_title: sectionTitle }
      )
      .then((res) => {});
    // Envoyer les modifications au serveur si nécessaire
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/faqQuestion` + etablissement, {
        params: {
          section_id: faqSection._id,
        },
      })
      .then((res) => {
        setFaqQuestions(res.data);
      });
  }, [fetchData]);

  return (
    <div className="section-container">
      <div className="section-title">
        {isRootPath && (
          <>
            <div className="controller">
              <a className="fa-solid fa-pen" onClick={handleEditSection}></a>

              <a
                className="fa-sharp fa-solid fa-trash"
                onClick={() => handleDeleteSection(faqSection._id)}
              ></a>
            </div>
          </>
        )}
        {isEditing ? (
          <>
            <input value={sectionTitle} onChange={handleTextareaChange}></input>
            <button onClick={handleValidation}>Valider</button>
          </>
        ) : (
          <h3>{faqSection.section_title}</h3>
        )}
      </div>
      {faqQuestions.map((faqQuestion) => (
        <QuestionFAQ
          key={faqQuestion._id}
          faqQuestion={faqQuestion}
          etablissement={etablissement}
        />
      ))}
    </div>
  );
};

export default SectionFAQ;
