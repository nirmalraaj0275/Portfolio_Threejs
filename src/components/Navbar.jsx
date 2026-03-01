import { useState, useEffect } from "react";

const sections = ["home", "services", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔥 Detect active section
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll function
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-30">
        <div className="backdrop-blur-lg bg-white/10 px-8 py-3 rounded-full flex gap-6 text-white">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition ${
                active === item
                  ? "text-red-500"
                  : "hover:text-red-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden fixed top-5 left-5 z-30">
        <button
          onClick={() => setOpen(true)}
          className="bg-white/10 backdrop-blur-lg p-3 rounded-full text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-xs bg-black text-white z-40 
        transform transition-all duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-2xl"
        >
          ✕
        </button>

        {/* MENU */}
        <div className="flex flex-col justify-center h-full gap-10 px-8 text-2xl font-semibold">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-left transition ${
                active === item
                  ? "text-red-500 translate-x-2"
                  : "hover:text-red-500 hover:translate-x-2"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
}