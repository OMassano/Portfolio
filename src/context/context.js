import { createContext } from "react";
import { dictionary, languages } from "../languages";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionary.en,
});
