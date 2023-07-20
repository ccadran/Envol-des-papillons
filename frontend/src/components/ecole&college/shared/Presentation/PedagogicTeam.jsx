import React, { useEffect, useState } from "react";
import axios from "axios";
import Teacher from "./Teacher";
import "styles/ecole&college/Presentation/_pedagogicTeam.scss";

const PedagogicTeam = ({ text, etablissement }) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/teacher", {
        params: {
          etablissement: etablissement,
        },
      })
      .then((res) => {
        setTeachers(res.data);
      });
  }, []);
  return (
    <section className="pedagogic-team">
      <h3>L'équipe pédagogique</h3>
      <p>{text}</p>
      <div className="teachers-container">
        {teachers.map((teacher) => (
          <Teacher key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </section>
  );
};

export default PedagogicTeam;
