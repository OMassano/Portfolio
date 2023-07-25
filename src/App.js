import Landing from "./views/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./views/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-darkBG text-darkBG dark:text-white cursor-default">
        <Landing />
        <About />
      </main>
    </div>
  );
}

export default App;
