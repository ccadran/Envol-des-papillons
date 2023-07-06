import React, { useEffect, useState } from "react";
import SearchFilter from "../../parents/Actualités/SearchFilter";
import axios from "axios";
import BlogPost from "./BlogPost";

const BlogContent = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/blog").then((res) => {
      setBlogPost(res.data);
    });
  }, []);
  return (
    <section className="blog-content">
      <SearchFilter />
      <div className="blog-container">
        {blogPost.map((blogPost) => (
          <BlogPost key={blogPost._id} article={blogPost} />
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
