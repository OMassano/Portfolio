import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/langContext";

const LangButton = () => {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  const isEnglish = currentLanguage === "english";
  const isSpanish = currentLanguage === "spanish";
  return (
    <div className="grid grid-cols-2 border-2 dark:border-violet-300 border-violet-500 dark:bg-darkBG bg-white">
      <p
        className={`flex items-center px-3 py-1 border-r dark:border-violet-300 border-violet-500 cursor-pointer${
          isEnglish
            ? "dark:bg-violet-300 dark:text-darkBG bg-violet-500 text-white"
            : ""
        }`}
        onClick={() => toggleLanguage("english")}
      >
        en
      </p>
      <p
        className={`flex items-center px-3 py-1 border-l dark:border-violet-300 border-violet-500 cursor-pointer ${
          isSpanish
            ? "dark:bg-violet-300 dark:text-darkBG bg-violet-500 text-white"
            : ""
        }`}
        onClick={() => toggleLanguage("spanish")}
      >
        es
      </p>
    </div>
  );
};

export default LangButton;
