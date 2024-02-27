"use client";
import { useEffect, useState } from "react";
import de from "../dictionaries/de.json";
import en from "../dictionaries/en.json";

export function useLanguageContext() {
  const [language, setLanguage] = useState("");
  const [dictionary, setDictionary] = useState(de);

  useEffect(() => {
    switch (language) {
      case "de":
        setDictionary(de);
        break;
      default:
        setDictionary(en);
        break;
    }
    if (language.length <= 0) return;
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    setLanguage(localStorage.getItem("language") ?? navigator.language);
  }, []);

  return [dictionary, language, setLanguage] as [
    typeof de,
    string,
    (language: string) => void
  ];
}
