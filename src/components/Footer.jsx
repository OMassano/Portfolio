import React from "react";

import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer className="flex flex-col text-violet-500 dark:text-violet-300 w-full sm:sticky bottom-0 bg-transparent z-0">
      <div className="justify-between items-center p-5">
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-3xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
