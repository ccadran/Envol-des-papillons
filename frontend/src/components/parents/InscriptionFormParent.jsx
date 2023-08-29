import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import test from "assets/img/test.JPG";

const InscriptionFormParent = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      // Collect the form data from the form using the formRef
      const formData = new FormData(formRef.current);

      // Create an object with the collected form data
      const newParent = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      // Send the data to your backend using POST
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/parent`,
        newParent
      );

      // Redirect the user to the login page after successful registration
      navigate("/parents/connexion-parent");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <section className="inscription-container">
      <div className="img-container">
        <img src={test} alt="test" loading="lazy" />
      </div>{" "}
      <div className="form-inscription">
        <h3>Créer un compte parent</h3>
        <form ref={formRef} className="form-fields">
          <input type="text" name="firstName" placeholder="Prénom" />
          <input type="text" name="lastName" placeholder="Nom" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />
        </form>
        <button onClick={handleRegister}>Créer</button>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
};

export default InscriptionFormParent;
