import React, { useEffect, useState } from "react";
import SectionFAQ from "./SectionFAQ";
import axios from "axios";

const ContentFAQ = ({ etablissement }) => {
  const [faqSections, setFaqSections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/faqSection" + etablissement)
      .then((res) => {
        setFaqSections(res.data);
      });
  }, []);

  return (
    <>
      {faqSections.map((faqSection) => (
        <SectionFAQ
          key={faqSection._id}
          faqSection={faqSection}
          etablissement={etablissement}
        />
      ))}
    </>
  );
};

export default ContentFAQ;
