import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from "axios";

const Tags = ({ tags }) => {
  const [blogTags, setBlogTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/blogTag").then((res) => {
      setBlogTags(res.data);
    });
  }, []);

  const getTagName = (tagId) => {
    const tag = blogTags.find((tag) => tag._id === tagId);
    return tag ? tag.tag_name : "";
  };

  return (
    <div className="search-tags">
      {tags && tags.map((tagId) => <Tag key={tagId} tag={getTagName(tagId)} />)}
      {!tags && <p>No tags available</p>}
    </div>
  );
};

export default Tags;
