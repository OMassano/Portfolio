import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-darkBG text-darkBG dark:text-white cursor-default">
        <Landing />
      </main>
    </div>
  );
}

export default App;
