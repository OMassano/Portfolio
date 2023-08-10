import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./views/Contact/Contact";
import { LanguageContext } from "./context/langContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  function toggleLanguage(lang) {
    console.log("current", currentLanguage);
    console.log("next", lang);
    setCurrentLanguage(lang);
  }

  return (
    <>
      <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
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
      </LanguageContext.Provider>
    </>
  );
}

export default App;
