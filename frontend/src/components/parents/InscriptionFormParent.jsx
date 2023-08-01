import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      // Make the API call to register the parent
      const response = await axios.post("http://localhost:5001/parent", {
        firstName,
        lastName,
        username,
        email,
        password,
      });

      // Redirect the user to the login page after successful registration
    } catch (error) {
      // Handle registration errors (e.g., username or email already taken)
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <section className="registration-container">
      <div className="form-registration">
        <h3>Register as a Parent</h3>
        <div className="form-fields">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default RegistrationForm;
