import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/langContext";

const LangButton = () => {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);
  return <div onClick={toggleLanguage}>{currentLanguage}</div>;
};

export default LangButton;
