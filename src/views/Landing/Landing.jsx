import React, { useContext } from "react";
import { LangContent } from "../../components/langContent";
import { LanguageContext } from "../../context/langContext";

const Landing = () => {
  const {currentLanguage} = useContext(LanguageContext)
  return (
    //fills screen
    <section
      id="landing"
      className="min-h-screen flex flex-col justify-center  items-center p-5 text-center"
    >
      <h3 className="text-4xl ">
        <LangContent contentID="name" />
      </h3>
      <h2 className="text-5xl py-5 font-bold dark:text-violet-300 text-violet-500 font-russo-one">
        <LangContent contentID="title" />
      </h2>

      <p className="max-w-xl font-light">
        <LangContent contentID="intro"/>
      </p>
      <a
        href={`/OceanaMassano-${currentLanguage}-Sep23.pdf`}
        download={true}
        className="flex hover:scale-110 items-center justify-center mt-10 py-2 px-4 rounded-md dark:bg-violet-300 bg-violet-500 font-semibold dark:text-darkBG text-white shadow-md dark:shadow-inner dark:hover:bg-violet-200 hover:bg-violet-600 duration-200"
      >
        <LangContent contentID="resume"/>
      </a>
    </section>
  );
};

export default Landing;
