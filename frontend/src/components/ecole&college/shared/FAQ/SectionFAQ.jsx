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
      .delete(`http://localhost:5001/faqSection${etablissement}/${sectionId}`)
      .then((res) => {
        setFetchData(true);
      });
  };

  const handleEditSection = () => {
    setIsEditing(true);
  };

  const handleTextareaChange = (event) => {
    setSectionTitle(event.target.value);
  };

  const handleValidation = () => {
    console.log(faqSection._id);
    // Effectuer les actions de validation ici
    setIsEditing(false);
    axios
      .put(
        `http://localhost:5001/faqSection${etablissement}/${faqSection._id}`,
        { section_title: sectionTitle }
      )
      .then((res) => {
        console.log(res.data);
      });
    // Envoyer les modifications au serveur si nécessaire
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/faqQuestion" + etablissement, {
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
              <Link onClick={() => handleDeleteSection(faqSection._id)}>
                Supprimer
              </Link>
              {!isEditing && <Link onClick={handleEditSection}>Modifier</Link>}
            </div>
          </>
        )}
        {isEditing ? (
          <>
            <textarea
              value={sectionTitle}
              onChange={handleTextareaChange}
            ></textarea>
            <Link onClick={handleValidation}>Valider</Link>
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
