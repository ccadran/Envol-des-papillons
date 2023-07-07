import React, { useEffect, useState } from "react";
import axios from "axios";
import Tag from "components/parents/Actualités/Tag";
import "styles/etablissement/Blog/_tags.scss";

const BlogTags = ({ handleTagClick, selectedTags }) => {
  const [blogTags, setBlogTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/blogTag").then((res) => {
      setBlogTags(res.data);
    });
  }, []);

  return (
    <div className="search-tags">
      {blogTags.map((tag) => (
        <Tag
          key={tag._id}
          tag={tag.tag_name}
          onClick={() => handleTagClick(tag._id)}
          isSelected={selectedTags.includes(tag._id)}
        />
      ))}
    </div>
  );
};

export default BlogTags;
