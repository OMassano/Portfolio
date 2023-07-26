import React, { useState } from "react";
// import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { TbHexagonLetterO } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
import linksNavbar from "../data/linksNavbar";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="drop-shadow-md bg-white dark:bg-darkBG text-violet-500 dark:text-violet-300 fixed w-full">
      <nav className="flex justify-between items-center p-5">
        <TbHexagonLetterO className="text-5xl" />
        {/* <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-3xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-3xl cursor-pointer" />
          )}
        </div> */}
        <ul className="hidden sm:flex">
          {linksNavbar.map((link) => (
            <li
              key={link.id}
              className="px-3 cursor-pointer font-light dark:text-white text-gray-700 hover:scale-110 duration-150"
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className="text-3xl cursor-pointer z-10"
        >
          {menu ? <CgCloseR /> : <BiMenu />}
        </div>
        <ul className="flex flex-col justify-center top-0 items-center absolute w-full h-screen">
          {linksNavbar.map((link) => (
            <li key={link.id} className="px-3 cursor-pointer font-light py-3">
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
