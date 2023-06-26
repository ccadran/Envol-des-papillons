import React, { useEffect, useState } from "react";
import QuestionFAQ from "./QuestionFAQ";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../shared/Button";

const SectionFAQ = ({ faqSection, etablissement }) => {
  const [faqQuestions, setFaqQuestions] = useState([]);
  const location = useLocation();
  const [fetchData, setFetchData] = useState(false);

  const isRootPath = location.pathname === "/admin/faq";

  const handleDeleteSection = (sectionId) => {
    axios
      .delete(`http://localhost:5001/faqSection${etablissement}/${sectionId}`)
      .then((res) => {
        setFetchData(true);
      });
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
            <Link onClick={() => handleDeleteSection(faqSection._id)}>
              Supprimer
            </Link>
            {/* <Button text="Supprimer" /> */}
          </>
        )}
        <h3>{faqSection.section_title}</h3>
      </div>
      {faqQuestions.map((faqQuestion) => (
        <QuestionFAQ key={faqQuestion._id} faqQuestion={faqQuestion} />
      ))}
    </div>
  );
};

export default SectionFAQ;
