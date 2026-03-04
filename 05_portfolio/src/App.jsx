// import { Navbar } from './components/Navbar_section/Navbar';
import { Navbar } from "./components/01_Navbar_section/Navbar";
import { Footer } from "./components/Footer_section/Footer"
import { Hero } from "./components/02_Hero_section/Hero"
import { Education } from "./components/03_Educaton_section/Education";
import { Skills } from "./components/04_Skills_section/Skills";
import { Projects } from "./components/05_Projects_section/Projects";
import { Contact } from "./components/06_Contact_section/Contact";



export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

