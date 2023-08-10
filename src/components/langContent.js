import { useContext } from "react";
import { LanguageContext } from "../context/langContext.js";
import { languages } from "../context/languages.js";

export const LangContent = ({ contentID }) => {
  const { currentLanguage } = useContext(LanguageContext);
  console.log("Language:", currentLanguage);
  console.log("ContentId:", contentID);
  //   console.log("Full object:", languages);
  console.log("Content:", languages[currentLanguage][contentID]);

  return languages[currentLanguage][contentID];
};
