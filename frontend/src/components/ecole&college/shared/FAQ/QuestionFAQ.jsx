import React from "react";

const QuestionFAQ = ({ faqQuestion }) => {
  return (
    <div className="question-container">
      <h5>{faqQuestion.question}</h5>
    </div>
  );
};

export default QuestionFAQ;
