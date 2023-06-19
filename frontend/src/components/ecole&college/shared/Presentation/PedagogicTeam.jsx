import React, { useEffect, useState } from "react";
import axios from "axios";
import Teacher from "./Teacher";

const PedagogicTeam = ({ text }) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/teacher", {
        params: {
          etablissement: "école",
        },
      })
      .then((res) => {
        setTeachers(res.data);
      });
    console.log(teachers);
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
