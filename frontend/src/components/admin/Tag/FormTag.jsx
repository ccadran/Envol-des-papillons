import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormTag = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const newTag = {
      tag_name: formData.get("name"),
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/blogTag`,
        newTag
      );
      navigate("/admin/blog");
      formRef.current.reset();
    } catch (error) {
      console.error("Erreur lors de l'ajout du tag :", error);
    }
  };
  return (
    <div className="form-tag">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Nom du tag</label>
        <input type="text" placeholder="Nom du tag" name="name" />
        <button type="submit">Ajouter le tag</button>
      </form>
    </div>
  );
};

export default FormTag;
