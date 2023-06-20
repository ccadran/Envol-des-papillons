import React, { useEffect, useState } from "react";
import QuestionFAQ from "./QuestionFAQ";
import axios from "axios";
import { set } from "mongoose";

const SectionFAQ = ({ faqSection }) => {
  const [faqQuestions, setFaqQuestions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/faqQuestionSchool", {
        params: {
          section_id: faqSection._id,
        },
      })
      .then((res) => {
        setFaqQuestions(res.data);
      });
  }, []);
  return (
    <div className="section-container">
      <h3>{faqSection.section_title}</h3>
      {faqQuestions.map((faqQuestion) => (
        <QuestionFAQ key={faqQuestion._id} faqQuestion={faqQuestion} />
      ))}
    </div>
  );
};

export default SectionFAQ;
