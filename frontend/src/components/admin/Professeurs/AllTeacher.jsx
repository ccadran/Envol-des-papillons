import React, { useState } from "react";
import axios from "axios";
import TeacherAdmin from "./TeacherAdmin";

const AllTeacher = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [teachers, setTeachers] = useState([]); // [
  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);

    if (selectedValue) {
      axios
        .get("http://localhost:5001/teacher", {
          params: {
            etablissement: selectedValue,
          },
        })
        .then((res) => {
          setTeachers(res.data);
          console.log(teachers);
        });
    }
  };

  return (
    <section className="teachers">
      <div className="etablissement">
        <select
          id="selectedEtablissement"
          onChange={handleEtablissementChange}
          value={selectedEtablissement}
        >
          <option value="">Sélectionner l'établissement</option>
          <option value="collège">école</option>
          <option value="école">collège</option>
        </select>
      </div>
      <div className="teachers-container">
        {selectedEtablissement ? (
          teachers.map((teacher) => (
            <TeacherAdmin key={teacher._id} teacher={teacher} />
          ))
        ) : (
          <h3>Veuillez séléctionner un établissement</h3>
        )}
      </div>
    </section>
  );
};

export default AllTeacher;
