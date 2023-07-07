import React, { useEffect, useState } from "react";
import axios from "axios";
import Tag from "components/parents/Actualités/Tag";

const BlogTags = () => {
  const [blogTags, setBlogTags] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/blogTag").then((res) => {
      setBlogTags(res.data);
    });
  }, []);
  return (
    <div className="search-tags">
      {blogTags.map((tag) => (
        <Tag key={tag._id} tag={tag.tag_name} />
      ))}{" "}
    </div>
  );
};

export default BlogTags;
