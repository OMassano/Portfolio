import React from "react";
import LangButton from "./LangButton";

import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer className="flex flex-col text-violet-500 dark:text-violet-300 w-full sm:sticky bottom-0 bg-transparent z-0">
      <div className="flex justify-between  items-center p-5">
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-3xl cursor-pointer dark:hover:text-violet-200 hover:text-violet-600 hover:scale-105 duration-200" />
          ) : (
            <MdNightsStay className="text-3xl cursor-pointer dark:hover:text-violet-200 hover:text-violet-600 hover:scale-105 duration-200" />
          )}
        </div>
        <LangButton />
      </div>
    </footer>
  );
};

export default Footer;
