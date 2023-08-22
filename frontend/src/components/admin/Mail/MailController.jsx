import React, { useEffect, useState } from "react";
import axios from "axios";
import Mail from "./Mail";
import Button from "components/shared/Button";

const MailController = () => {
  const [mailsData, setMailsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/mail-parent`).then((res) => {
      setMailsData(res.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredMails = mailsData.filter((mail) => {
    const allChildNames = mail.childNames.join(" ").toLowerCase();
    const lowercaseSearchText = searchText.toLowerCase();
    return allChildNames.includes(lowercaseSearchText);
  });

  return (
    <section className="mail">
      <div className="mail-controller">
        <input
          type="text"
          placeholder="&#x1F50D; Rechercher un enfant"
          onChange={handleSearchChange}
          value={searchText}
        />
        <Button text="Ajouter un mail" link="new-mail" color="violet" />
      </div>
      <div className="mail-list">
        {filteredMails.map((mail) => {
          return <Mail key={mail._id} mail={mail} />;
        })}
      </div>
    </section>
  );
};

export default MailController;
