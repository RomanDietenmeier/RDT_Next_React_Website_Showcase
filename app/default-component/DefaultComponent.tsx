import { ThemeProvider } from "styled-components";
import DarkModeContext from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import { AppWrapper } from "../page.style";
import { Header } from "../header/Header";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { ReactNode, useEffect, useState } from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { darkTheme, whiteTheme } from "../../ui/theme";

type DefaultComponentProps = {
  children: ReactNode;
};

export function DefaultComponent({ children }: DefaultComponentProps) {
  const [useDarkMode, setUseDarkMode] = useState<boolean>(null);
  const [dictionary, language, setLanguage] = useLanguageContext();

  useEffect(() => {
    document.body.style.backgroundColor = useDarkMode
      ? darkTheme.color.background
      : whiteTheme.color.background;

    if (useDarkMode === null) return;

    localStorage.setItem("useDarkMode", `${useDarkMode}`);
  }, [useDarkMode]);

  useEffect(() => {
    setUseDarkMode(
      localStorage.getItem("useDarkMode")
        ? localStorage.getItem("useDarkMode") === "true"
        : window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const slideElementsCollection = document.getElementsByClassName(
      "animate-slide-in-from-bottom-5rem-target-class"
    );

    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-from-bottom-5rem");
          }
        }
      }
    });

    //@ts-expect-error
    for (const element of slideElementsCollection) {
      intersectionObserver.observe(element);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ dictionary, language, setLanguage }}>
      <DarkModeContext.Provider value={{ useDarkMode, setUseDarkMode }}>
        <ThemeProvider theme={useDarkMode ? darkTheme : whiteTheme}>
          <AppWrapper>
            <Header />
            {children}
            <Contact />
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </LanguageContext.Provider>
  );
}
