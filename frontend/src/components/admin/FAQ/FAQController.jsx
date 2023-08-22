import React, { useEffect, useState } from "react";
import Button from "../../shared/Button";
import axios from "axios";
import SectionFAQ from "../../ecole&college/shared/FAQ/SectionFAQ";

const FAQController = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [faqSections, setFaqSections] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(() => {
    if (selectedOption) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/faqSection${selectedOption}`)
        .then((res) => {
          setFaqSections(res.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des sections :", error);
        });
    }
  }, [selectedOption]);

  return (
    <>
      <div className="controller">
        <div className="new">
          <Button
            text="Ajouter une section"
            link="new-section"
            color="violet"
          />
          <Button
            text="Ajouter une question"
            link="new-question"
            color="violet"
          />
        </div>
        <div className="etablissement">
          <label htmlFor="selectOption">Choisissez la FAQ : </label>
          <select
            id="SelectOption"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Sélectionnez l'établissement</option>
            <option value="College">Collège</option>
            <option value="School">École</option>
          </select>
        </div>
      </div>

      <section className="faq-content">
        {selectedOption ? (
          faqSections.map((faqSection) => (
            <SectionFAQ
              key={faqSection._id}
              faqSection={faqSection}
              etablissement={selectedOption}
            />
          ))
        ) : (
          <p>
            Veuillez séléctionner l'établissement dont vous voulez voir les
            questions !
          </p>
        )}
      </section>
    </>
  );
};

export default FAQController;
