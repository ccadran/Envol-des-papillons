import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import chevron from "assets/logos/chevron.svg";

const QuestionFAQ = ({ faqQuestion, etablissement }) => {
  const location = useLocation();
  const [fetchData, setFetchData] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(faqQuestion.question);
  const [editedAnswer, setEditedAnswer] = useState(faqQuestion.question_answer);
  const [visible, setVisible] = useState(false);
  const toggleVisvibility = () => {
    setVisible(!visible);
  };

  const isRootPath =
    location.pathname === "/admin/FAQ" || location.pathname === "/admin/faq";

  const handleDeleteQuestion = (questionId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/faqQuestion${etablissement}/${questionId}`
      )
      .then(() => {
        setFetchData(true);
      });
    window.location.reload();
  };

  const handleEditQuestion = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveQuestion = () => {
    // Effectuer la mise à jour de la question sur le serveur
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/faqQuestion${etablissement}/${faqQuestion._id}`,
        {
          question: editedQuestion,
          question_answer: editedAnswer,
        }
      )
      .then(() => {
        setIsEditing(false);
        setFetchData(true);
      });
  };

  return (
    <div className="question-container" onClick={toggleVisvibility}>
      {isRootPath && (
        <div className="controller">
          <a className="fa-solid fa-pen" onClick={handleEditQuestion}></a>

          <a
            className="fa-sharp fa-solid fa-trash"
            onClick={() => handleDeleteQuestion(faqQuestion._id)}
          ></a>
        </div>
      )}
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
          />
          <textarea
            value={editedAnswer}
            onChange={(e) => setEditedAnswer(e.target.value)}
          ></textarea>
          <button onClick={handleSaveQuestion}>Valider</button>
        </>
      ) : (
        !isEditing && (
          <>
            <div className={visible ? "question visible" : "question"}>
              <h5>{faqQuestion.question}</h5>
              <img src={chevron} alt="chevron" loading="lazy" />
            </div>
            <div className={visible ? "answer visible" : "answer"}>
              <p>{faqQuestion.question_answer}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default QuestionFAQ;
