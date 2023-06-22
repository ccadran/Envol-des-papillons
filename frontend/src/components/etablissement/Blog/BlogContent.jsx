import React, { useEffect, useState } from "react";
import SearchFilter from "../../parents/Actualités/SearchFilter";
import axios from "axios";
import BlogArticle from "./BlogArticle";

const BlogContent = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/blog").then((res) => {
      console.log(res.data);
    });
    console.log(blogArticles);
  }, []);
  return (
    <section className="blog-content">
      <SearchFilter />
      <div className="blog -container">
        {blogArticles.map((blogArticle) => (
          <BlogArticle key={blogArticle._id} article={blogArticle} />
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
