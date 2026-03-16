import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../components/data/blogData";

const Blogs = () => {
    return (
        <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10 z-10 relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold mb-12">
                Blogs
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="border border-gray-700 p-6 rounded-xl hover:border-red-500 transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                        <p className="text-gray-400 mb-4">{blog.desc}</p>

                        <p className="text-sm text-gray-500 mb-4">
                            {blog.date} • {blog.author}
                        </p>

                        <Link
                            to={`/blog/${blog.id}`}
                            className="text-red-500 hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;