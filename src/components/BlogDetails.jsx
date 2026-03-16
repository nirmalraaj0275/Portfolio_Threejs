import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../components/data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1 className="text-white text-center mt-10">Blog Not Found</h1>;
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">

      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Meta */}
      <p className="text-gray-400 mb-6">
        {blog.date} • {blog.author}
      </p>

      {/* Content */}
      <p className="text-gray-300 leading-7">
        {blog.content}
      </p>

    </div>
  );
};

export default BlogDetail;