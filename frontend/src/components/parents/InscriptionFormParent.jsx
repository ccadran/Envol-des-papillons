import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import test from "assets/img/test.JPG";

const RegistrationForm = () => {
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
        "http://localhost:5001/parent",
        newParent
      );

      // Redirect the user to the login page after successful registration
      navigate("/parents/connexion-parent");
    } catch (error) {
      // Handle registration errors (e.g., username or email already taken)
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <section className="inscription-container">
      <div className="img-container">
        <img src={test} alt="test" />
      </div>{" "}
      <div className="form-inscription">
        <h3>Créer un compte parent</h3>
        <form ref={formRef} className="form-fields">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
        </form>
        <button onClick={handleRegister}>Créer</button>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default RegistrationForm;
