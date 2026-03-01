export default function Services() {
  return (
    <div
      id="services"
      className="text-white bg-black flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      {/* CONTAINER */}
      <div className="w-full  mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold leading-tight mb-10">
          SERVICES
        </h1>

        {/* INTRO */}
        <div className="max-w-3xl space-y-6 mb-12">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I provide full-stack web development services focused on building scalable, 
            high-performance applications with modern technologies. From frontend design 
            to backend architecture, I deliver complete solutions that enhance user 
            experience and business efficiency.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* SERVICE 1 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-400 text-sm">
              Building responsive and modern user interfaces using React, Next.js, 
              Tailwind CSS, and Bootstrap.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-400 text-sm">
              Creating scalable APIs and server-side logic using Node.js, Express, 
              and MongoDB.
            </p>
          </div>

          {/* SERVICE 3 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">Full Stack Solutions</h3>
            <p className="text-gray-400 text-sm">
              Developing complete web applications from frontend to backend with 
              secure authentication and performance optimization.
            </p>
          </div>

          {/* SERVICE 4 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">UI / UX Design</h3>
            <p className="text-gray-400 text-sm">
              Designing clean, user-friendly interfaces with modern UI/UX principles 
              for better user engagement.
            </p>
          </div>

          {/* SERVICE 5 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">API Integration</h3>
            <p className="text-gray-400 text-sm">
              Integrating third-party APIs, payment gateways, and services into 
              web applications.
            </p>
          </div>

          {/* SERVICE 6 */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
            <p className="text-gray-400 text-sm">
              Improving application speed, scalability, and overall performance 
              for better user experience.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="pt-12 text-center">
          <button className="px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition">
            Let's Work Together
          </button>
        </div>

      </div>
    </div>
  );
}