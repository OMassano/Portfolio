import React, { useState } from "react";
import { TbHexagonLetterO } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import linksNavbar from "../data/linksNavbar";
import { LangContent } from "./langContent";

const Navbar = ({ scrollToSection }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="drop-shadow-md bg-white dark:bg-darkBG text-violet-500 dark:text-violet-300 fixed w-full z-10">
      <nav className="flex justify-between items-center p-5">
        <TbHexagonLetterO
          className="text-5xl cursor-pointer duration-200"
          onClick={() => {
            scrollToSection("landing");
          }}
        />
        <ul className="hidden sm:flex">
          {linksNavbar.map((link) => (
            <li
              key={link.id}
              className="px-3 cursor-pointer dark:text-white text-gray-700 hover:scale-110 duration-200"
              onClick={() => {
                scrollToSection(link.id);
              }}
            >
              <Link to={link.href}>
                <LangContent contentID={link.name} />
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className="text-3xl cursor-pointer z-10 sm:hidden"
        >
          {menu ? <CgCloseR /> : <BiMenu />}
        </div>
        {menu && (
          <ul className=" sm:hidden flex flex-col justify-center top-0 items-center dark:bg-darkNav bg-white absolute w-full h-screen text-gray-700 dark:text-white z-5">
            {linksNavbar.map((link) => (
              <li
                key={link.id}
                className="px-3 cursor-pointer border-b-3 font-semibold hover:scale-110 m-2  hover:text-violet-500 dark:hover:text-violet-300 duration-200"
                onClick={() => {
                  setMenu(false);
                  scrollToSection(link.id);
                }}
              >
                <LangContent contentID={link.name} />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
