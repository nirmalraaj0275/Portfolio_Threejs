import React, { useState } from "react";

// Images
import Pavalsoftware from "../assets/projects/pavalsoftware.png";
import Cogniitech from "../assets/projects/cogniitech.png";
import Exceed from "../assets/projects/exceed.png";
import KrIndustries from "../assets/projects/kr industries.png";
import Skilloreawebsite from "../assets/projects/skilloreawebsite.png";
import Magizhal from "../assets/projects/magizhalm.png";
import Beliar from "../assets/projects/beliar.png";
import Alaado from "../assets/projects/alaado.png";
import Ktig from "../assets/projects/ktig.png";
import KovaiTechnidhi from "../assets/projects/kovaitechnidhi.png";
import BrAcademy from "../assets/projects/bracademy.png";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "paval",
      name: "Paval Software",
      desc: "E-Commerce Platform (Next.js + MongoDB)",
      img: Pavalsoftware,
      size: "large",
    },
    {
      id: "cogniitech",
      name: "Cogniitech",
      desc: "Corporate Website",
      img: Cogniitech,
      size: "small",
    },
    {
      id: "alaado",
      name: "Alaado",
      desc: "Admin Dashboard System",
      img: Alaado,
      size: "medium",
    },
    {
      id: "kr-industries",
      name: "KR Industries",
      desc: "Business Website",
      img: KrIndustries,
      size: "medium",
    },
    {
      id: "Skillorea",
      name: "Skillorea",
      desc: "WebSite for Skillorea",
      img: Skilloreawebsite,
      size: "small",
    },
    {
      id: "magizhal",
      name: "Magizhal",
      desc: "CRM & Client Management",
      img: Magizhal,
      size: "small",
    },
    {
      id: "beliar",
      name: "Beliar",
      desc: "Admin Panel Dashboard",
      img: Beliar,
      size: "medium",
    },
    {
      id: "exceed",
      name: "Exceed",
      desc: "Corporate Business Website",
      img: Exceed,
      size: "small",
    },
    {
      id: "ktig",
      name: "KTIG",
      desc: "E-Commerce Platform",
      img: Ktig,
      size: "large",
    },
    {
      id: "kovaitechnidhi",
      name: "Kovai Technidhi",
      desc: "Finance & Investment Platform",
      img: KovaiTechnidhi,
      size: "small",
    },
    {
      id: "bracademy",
      name: "BR Academy",
      desc: "Education Platform",
      img: BrAcademy,
      size: "medium",
    },
  ];

  const sizeClasses = {
    small: "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
    medium: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
    large: "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2",
  };

  // Show 6 initially
  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <div id="projects" className="px-6 md:px-16 py-20 text-white bg-black">

      {/* TITLE */}
      <h1  className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold mb-12">
        PROJECTS
      </h1>

      {/* DEBUG (optional) */}
      {/* <p>{showAll ? "Showing All" : "Showing 6"}</p> */}

      {/* GRID */}
      <div className="transition-all duration-500">
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4
          lg:grid-cols-4 
          auto-rows-[220px] 
          gap-6
        "
        >
          {visibleProjects.map((p) => (
            <div
              key={p.id}
              className={`
                relative group rounded-xl overflow-hidden cursor-pointer 
                border border-white/10 transition duration-300 
                hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                ${sizeClasses[p.size]}
              `}
            >
              {/* IMAGE */}
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover object-top 
                group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* RED OVERLAY */}
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* TEXT */}
              <div
                className="
                absolute bottom-4 left-4 right-4 z-20 
                opacity-0 translate-y-4 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-500
              "
              >
                <h3 className="text-base md:text-xl font-semibold">
                  {p.name}
                </h3>

                <div
                  className="
                  w-0 h-[2px] bg-red-500 my-2 
                  group-hover:w-12 transition-all duration-500
                "
                ></div>

                <p className="text-xs md:text-sm text-gray-300">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-10 relative z-50">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="
              px-6 py-3 border border-red-500 text-red-500 
              hover:bg-red-500 hover:text-white 
              transition duration-300 rounded-full
            "
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="
              px-6 py-3 border border-red-500 text-red-500 
              hover:bg-red-500 hover:text-white 
              transition duration-300 rounded-full
            "
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;