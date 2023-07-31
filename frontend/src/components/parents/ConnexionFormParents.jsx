import React from "react";
import Button from "../shared/Button";

import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import test from "assets/img/test.JPG";

const ConnexionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Faites l'appel API pour vous connecter
      const response = await axios.post("http://localhost:5001/login-parents", {
        username,
        password,
      });

      // Récupérez le token de la réponse
      const token = response.data.token;

      // Stockez le token dans le local storage
      localStorage.setItem("tokenParent", token);
      console.log(location.state?.from);
      // Redirigez l'utilisateur vers la page sécurisée après la connexion réussie
      navigate(location.state?.from || "/parents/actualites");
    } catch (error) {
      // Gérez les erreurs lors de la connexion (par exemple, des informations d'identification incorrectes)
      setError("Identifiants invalides. Veuillez réessayer.");
    }
  };

  return (
    <section className="connexion-container">
      <div className="img-container">
        <img src={test} alt="test" />
      </div>
      <div className="form-connexion">
        <h3>Espace Parents</h3>
        <div className="form-fields">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Se connecter</button>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default ConnexionForm;
