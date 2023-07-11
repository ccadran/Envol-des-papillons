import React, { useEffect, useState } from "react";
import Actuality from "./Actuality";
import SearchFilter from "./SearchFilter";
import axios from "axios";
import "styles/etablissement/Blog/_blog.scss";

const Actualities = () => {
  return (
    <section className="actualities-content">
      <SearchFilter />
    </section>
  );
};

export default Actualities;
