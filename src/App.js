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
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"></main>
    </div>
  );
}

export default App;
