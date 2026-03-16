import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../components/data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h1 className="text-white text-center mt-10">Project Not Found</h1>;
  }

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 py-10">

      {/* 🔙 BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
      >
        ← Back
      </button>

      {/* 🌐 PREVIEW */}
      <div className="flex justify-center mb-10">
        <iframe
          src={project.live}
          title={project.name}
          className="w-full max-w-6xl h-[600px] rounded-xl border shadow-lg"
        />
      </div>

      {/* 📦 CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto">

        {/* 🏷 TITLE */}
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

        {/* 📄 DESCRIPTION */}
        <p className="text-gray-300 mb-8">{project.fullDesc}</p>

        {/* ⚙️ TECH STACK */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-red-500">Tech Stack</h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-4 py-1 border border-red-500 rounded-full text-sm hover:bg-red-500 hover:text-white transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🚀 FEATURES */}
          {project.features && (
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-red-500">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ⭐ HIGHLIGHTS */}
          {project.highlights && (
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-red-500">Highlights</h2>
              <ul className="space-y-2 text-gray-300">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-yellow-400">★</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ⚠️ CHALLENGES */}
          {project.challenges && (
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-red-500">Challenges</h2>
              <ul className="space-y-2 text-gray-300">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-400">⚡</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 💡 SOLUTIONS */}
          {project.solutions && (
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-red-500">Solutions</h2>
              <ul className="space-y-2 text-gray-300">
                {project.solutions.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-400">✔</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* 🔘 BUTTONS */}
        <div className="flex gap-4 mt-10">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition"
            >
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;