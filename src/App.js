import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Navbar />
      <main className="bg-white dark:bg-darkBG text-darkBG dark:text-white cursor-default">
        <Landing />
        <About />
        <Projects />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </div>
  );
}

export default App;
