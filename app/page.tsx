import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import EducationSkills from "./components/EducationSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Services />

      <Experience />

      <EducationSkills />

      <Contact />

      <Footer />
    </main>
  );
}