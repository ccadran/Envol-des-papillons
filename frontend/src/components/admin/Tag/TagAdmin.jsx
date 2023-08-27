import axios from "axios";
import Button from "components/shared/Button";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";

const TagAdmin = ({ tag }) => {
  const [tags, setTags] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [tag_name, setTag_name] = useState(tag.tag_name);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogTag`).then((res) => {
      setTags(res.data);
      console.log(res.data);
    });
  }, []);

  const handleSaveClick = () => {
    const updatedTag = {
      tag_name: tag_name,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/blogTag/` + tag._id, updatedTag)
      .then((response) => {
        console.log("Modifications enregistrées avec succès !");
        setIsEditing(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement des modifications :");
      });
  };

  const deleteTags = (tag) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/blogTag/` + tag._id);
    window.location.reload();
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  return (
    <div className="tag" key={tag._id}>
      <div className="tag-controller">
        <a
          className="fa-sharp fa-solid fa-trash"
          onClick={() => deleteTags(tag)}
        ></a>
        {!isEditing && (
          <a className="fa-solid fa-pen" onClick={handleEditClick}></a>
        )}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={tag_name}
          onChange={(e) => setTag_name(e.target.value)}
        />
      ) : (
        <p>{tag.tag_name}</p>
      )}
      {isEditing && <button onClick={handleSaveClick}>Enregistrer</button>}
    </div>
  );
};

export default TagAdmin;

// <section className="tags-container">
// <div className="tags-controller">
//   <Button link="/admin/tags/new-tag" color="violet" text="Ajouter un tag">
//     {" "}
//   </Button>
//   <div className="all-tags">
//     {tags.map((tag) => (
//       <div className="tag" key={tag._id}>
//         {isEditing ? <input type="text" /> : <p>{tag.tag_name}</p>}
//         <a
//           className="fa-sharp fa-solid fa-trash"
//           onClick={() => deleteTags(tag)}
//         ></a>
//         {!isEditing && (
//           <a className="fa-solid fa-pen" onClick={handleEditClick}></a>
//         )}
//       </div>
//     ))}
//   </div>
// </div>
// </section>
