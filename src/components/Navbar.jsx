import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { TbHexagonLetterO } from "react-icons/tb";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-darkBG text-darkBG dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <TbHexagonLetterO className="text-5xl" />
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-3xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-3xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// AiOutlineLinkedin
// AiOutlineGithub
// AiOutlineMail
// FiGithub
// MdOpenInNew
