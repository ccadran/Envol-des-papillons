import React, { useState } from "react";
import axios from "axios";
import TeacherAdmin from "./TeacherAdmin";
import { Link } from "react-router-dom";
import Button from "components/shared/Button";

const AllTeacher = () => {
  const [selectedEtablissement, setSelectedEtablissement] = useState("");
  const [teachers, setTeachers] = useState([]); // [
  const handleEtablissementChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEtablissement(selectedValue);

    if (selectedValue) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/teacher`, {
          params: {
            etablissement: selectedValue,
          },
        })
        .then((res) => {
          setTeachers(res.data);
        });
    }
  };

  return (
    <section className="teachers-admin">
      <div className="controller-teacher">
        <div className="etablissement">
          <label htmlFor="selectedEtablissement">
            sélectionner un établissement :
          </label>
          <select
            id="selectedEtablissement"
            onChange={handleEtablissementChange}
            value={selectedEtablissement}
          >
            <option value="">Sélectionner l'établissement</option>
            <option value="école">école</option>
            <option value="collège">collège</option>
          </select>
        </div>
        <Button
          link="/admin/teachers/new-teacher"
          color="violet"
          text="Ajouter un professeur"
        ></Button>
      </div>
      <div className="teachers-container-admin">
        {selectedEtablissement ? (
          teachers.map((teacher) => (
            <TeacherAdmin key={teacher._id} teacher={teacher} />
          ))
        ) : (
          <h3>Veuillez sélectionner un établissement</h3>
        )}
      </div>
    </section>
  );
};

export default AllTeacher;
