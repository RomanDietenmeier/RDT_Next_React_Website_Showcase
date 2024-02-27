import { useContext } from "react";

import CrescentMoon from "openmoji/color/svg/1F319.svg";
import LightBulb from "openmoji/color/svg/1F4A1.svg";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import {
  NavbarDesktopIcon,
  NavbarDesktopLink,
  NavbarDesktopUnorderedList,
} from "./NavbarDesktop.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarDesktop() {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);
  const nextLanguage = getNextLanguage(language);

  return (
    <NavbarDesktopUnorderedList>
      <li>
        <NavbarDesktopLink href={NavbarRouteLinks.Home}>
          {dictionary.Navbar.Home}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href={NavbarRouteLinks.About}>
          {dictionary.Navbar.About}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href={NavbarRouteLinks.Services}>
          {dictionary.Navbar.Services}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href={NavbarRouteLinks.Team}>
          {dictionary.Navbar.Team}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href={NavbarRouteLinks.Contact}>
          {dictionary.Navbar.Contact}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href="javascript:void(0);"
          onClick={() => setLanguage(nextLanguage)}
        >
          <NavbarDesktopIcon src={getCountryFlag(language)} />
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href="javascript:void(0);"
          onClick={() => setUseDarkMode(!useDarkMode)}
        >
          <NavbarDesktopIcon
            src={useDarkMode ? CrescentMoon.src : LightBulb.src}
          />
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}
