import React from "react";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div>
      <h1>La page école</h1>
      <Link to="/ecole/pedagogie">Pédagogie</Link>
    </div>
  );
};

export default Presentation;
