import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-2xl">Oceana</h1>
        <div>
          <MdNightsStay className="text-3xl cursor-pointer"/>
          <MdWbSunny className="text-3xl cursor-pointer"/>
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
