import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Navbar/>
      <main className="bg-white dark:bg-darkBG text-darkBG dark:text-white cursor-default">
        <Landing />
        <About />
        <Projects/>
      </main>
    </div>
  );
}

export default App;
