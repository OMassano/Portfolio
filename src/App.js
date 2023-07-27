import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./views/Contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={darkMode && "dark"}>
      <Navbar scrollToSection={scrollToSection} />
      <main className="bg-white dark:bg-darkBG text-darkBG dark:text-white cursor-default">
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </div>
  );
}

export default App;
