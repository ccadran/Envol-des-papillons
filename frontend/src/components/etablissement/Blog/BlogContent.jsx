import React, { useEffect, useState } from "react";
import SearchFilter from "../../parents/Actualités/SearchFilter";

const BlogContent = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  useEffect(() => {}, []);
  return (
    <section className="blog-content">
      <SearchFilter />
      <div className="blog -container"></div>
    </section>
  );
};

export default BlogContent;
