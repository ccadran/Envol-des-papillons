import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from "axios";
import "styles/etablissement/Blog/_tags.scss";

const Tags = ({ tags, isSelected }) => {
  const [blogTags, setBlogTags] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogTag`).then((res) => {
      setBlogTags(res.data);
    });
  }, []);

  const getTagName = (tagId) => {
    const tag = blogTags.find((tag) => tag._id === tagId);
    return tag ? tag.tag_name : "";
  };

  return (
    <div className="tags">
      {tags &&
        tags.map((tagId) => (
          <Tag key={tagId} tag={getTagName(tagId)} isSelected={isSelected} />
        ))}
      {!tags && <p>No tags available</p>}
    </div>
  );
};

export default Tags;
