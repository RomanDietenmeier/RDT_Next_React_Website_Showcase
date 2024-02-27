import { createContext } from "react";
import de from "../dictionaries/de.json";

const LanguageContext = createContext<{
  dictionary: typeof de;
  language: string;
  setLanguage: (language: string) => void;
}>({
  dictionary: de,
  language: "de",
  setLanguage: () => {},
});

export default LanguageContext;
