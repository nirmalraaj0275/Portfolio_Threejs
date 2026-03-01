import GlobalParticle from "../components/three/GlobalParticles";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <GlobalParticle />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;