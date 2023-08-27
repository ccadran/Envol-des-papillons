import axios from "axios";
import Button from "components/shared/Button";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import TagAdmin from "./TagAdmin";

const AllTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogTag`).then((res) => {
      setTags(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <section className="tags-container">
      <div className="tags-controller">
        <Button link="/admin/tags/new-tag" color="violet" text="Ajouter un tag">
          {" "}
        </Button>
      </div>
      <div className="all-tags">
        {tags.map((tag) => (
          <TagAdmin key={tag._id} tag={tag} />
        ))}
      </div>
    </section>
  );
};

export default AllTags;
