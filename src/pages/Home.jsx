import GlobalParticle from "../components/three/GlobalParticles";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <GlobalParticle />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
};

export default Home;