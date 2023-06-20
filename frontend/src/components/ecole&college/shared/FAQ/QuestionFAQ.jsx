import React from "react";

const QuestionFAQ = ({ faqQuestion }) => {
  console.log(faqQuestion);
  return (
    <div className="question-container">
      <h5>{faqQuestion.question}</h5>
    </div>
  );
};

export default QuestionFAQ;
