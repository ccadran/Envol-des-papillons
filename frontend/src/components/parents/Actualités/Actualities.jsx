import React, { useEffect, useState } from "react";
import Actuality from "./Actuality";
import SearchFilter from "./SearchFilter";
import axios from "axios";

const Actualities = () => {
  const [actualities, setActualities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/actuality").then((res) => {
      setActualities(res.data);
    });
  }, []);
  return (
    <section className="actualities">
      <SearchFilter />
      <div className="actualities-container">
        {actualities.map((actuality) => (
          <Actuality key={actuality._id} actuality={actuality} />
        ))}
      </div>
    </section>
  );
};

export default Actualities;
