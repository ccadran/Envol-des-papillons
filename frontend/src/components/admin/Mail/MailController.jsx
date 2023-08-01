import React, { useEffect, useState } from "react";
import axios from "axios";
import Mail from "./Mail";

const MailController = () => {
  const [mailsData, setMailsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5001/mail-parent").then((res) => {
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
      <div className="mail-search">
        <input
          type="text"
          placeholder="&#x1F50D; Rechercher un mail"
          onChange={handleSearchChange}
          value={searchText}
        />
      </div>
      <div className="new-mail"></div>
      <div className="mail-list">
        {filteredMails.map((mail) => {
          return <Mail key={mail._id} mail={mail} />;
        })}
      </div>
    </section>
  );
};

export default MailController;
