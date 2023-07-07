import React, { useEffect, useState } from "react";
import SearchFilter from "../../parents/Actualités/SearchFilter";
import axios from "axios";
import BlogPost from "./BlogPost";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <SearchFilter />
    </section>
  );
};

export default BlogContent;
