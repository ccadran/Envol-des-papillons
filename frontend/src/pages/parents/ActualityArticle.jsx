import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ActualityArticle = () => {
  const [actualityArticle, setActualityArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/actuality/${id}`).then((res) => {
      setActualityArticle(res.data);
    });
  }, [id]);

  if (!actualityArticle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>L'article</h1>
      <h2>{actualityArticle.title}</h2>
      <p>{actualityArticle.accroche}</p>
      <p>{actualityArticle.introduction}</p>
      {/* Affichez d'autres détails de l'actualité ici */}
    </div>
  );
};

export default ActualityArticle;
