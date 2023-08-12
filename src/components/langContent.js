import { useContext } from "react";
import { LanguageContext } from "../context/langContext.js";
import { languages } from "../context/languages.js";

export const LangContent = ({ contentID }) => {
  const { currentLanguage } = useContext(LanguageContext);
  //   console.log("Language:", currentLanguage);
  //   console.log("ContentId:", contentID);
  //   //   console.log("Full object:", languages);
    console.log("Content:", languages[currentLanguage][contentID]);

  //   if (contentID === "aboutText") {
  //     const content = languages[currentLanguage][contentID];
  //     console.log("content",content)
  //     const paragraphs = content.split("*p*")
  //     // .map((paragraph) => {
  //     //     {console.log("para", paragraph)}
  //     //   <p className=" max-w-3xl py-2">{paragraph}</p>;
  //     // });
  //     console.log(paragraphs)
  //     return paragraphs;
  //   }

  return languages[currentLanguage][contentID];
};
