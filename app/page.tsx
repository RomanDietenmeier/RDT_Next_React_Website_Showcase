"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, whiteTheme } from "../ui/theme";
import { Footer } from "./sections/Footer";
import DarkModeContext from "./components/DarkModeContext";
import LanguageContext from "./components/LanguageContext";
import { Header } from "./header/Header";
import { useLanguageContext } from "./hooks/useLanguageContext";
import { AppWrapper } from "./page.style";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";
import { DefaultComponent } from "./default-component/DefaultComponent";

export default function Page() {
  return (
    <DefaultComponent>
      <StartPage />
      <About />
      <Services />
      <Team />
    </DefaultComponent>
  );
}
