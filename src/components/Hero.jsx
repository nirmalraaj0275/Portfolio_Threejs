import TechSphere from "../components/three/Particles";

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-10 gap-10">

      {/* LEFT */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

        {/* SMALL TAG */}
        <p className="text-red-500 tracking-[0.3em] text-xs md:text-sm uppercase">
          Full Stack Developer
        </p>

        {/* NAME */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold leading-tight">
          NIRMAL RAJ R
        </h1>

        {/* TAGLINE */}
        {/* <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200">
          Building scalable & high-performance web applications 🚀
        </h2> */}

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
          I specialize in MERN stack development, creating modern, responsive,
          and scalable applications with clean UI and optimized backend logic.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">

          <button className="px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
            Contact Me
          </button>

        </div>

        {/* STATS */}
        <div className="flex justify-center lg:justify-start items-center mt-8 text-sm sm:text-base md:text-lg">

          <div>
            <span className="text-white font-semibold text-xl">10+</span>
            <span className="text-gray-400 ml-2">Projects</span>
          </div>

          <div className="h-5 w-px bg-gray-600 mx-5"></div>

          <div>
            <span className="text-white font-semibold text-xl">1+</span>
            <span className="text-gray-400 ml-2">Years Experience</span>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>

        <TechSphere />

      </div>

    </div>
  );
}