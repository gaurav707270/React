import { Navbar } from "./components/01_Navbar_section/Navbar";
import { Hero } from "./components/02_Hero_section/Hero";
import { About } from "./components/03_About_section/About";
import { Education } from "./components/04_Education_section/Education";
import { Skills } from "./components/05_Skills_section/Skills";
import { Projects } from "./components/06_Projects_section/Projects";
import { Contact } from "./components/07_Contact_section/Contact";
import { Footer } from "./components/08_Footer_section/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

