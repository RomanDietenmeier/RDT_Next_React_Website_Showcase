import CrescentMoon from "openmoji/color/svg/1F319.svg";
import LightBulb from "openmoji/color/svg/1F4A1.svg";
import { useContext, useEffect, useState } from "react";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import { NavbarDesktopIcon } from "./NavbarDesktop.style";
import {
  NavbarMobileBurgerMenu,
  NavbarMobileLink,
  NavbarMobileLinkSeparator,
  NavbarMobileListHeading,
  NavbarMobileText,
  NavbarMobileUnorderedList,
  NavbarMobileWrapper,
} from "./NavbarMobile.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export const enum OpenState {
  InitialClosed,
  Open,
  Closed,
}

export function NavbarMobile() {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(OpenState.InitialClosed);
  const nextLanguage = getNextLanguage(language);

  useEffect(() => {
    setOpen(OpenState.InitialClosed);
  }, []);

  function handleBurgerMenuClick() {
    setOpen((open) =>
      open === OpenState.Closed || open === OpenState.InitialClosed
        ? OpenState.Open
        : OpenState.Closed
    );
  }

  function handleNavLinkMobileClick(e) {
    setOpen(OpenState.Closed);
  }

  return (
    <NavbarMobileWrapper>
      <NavbarMobileBurgerMenu
        onClick={handleBurgerMenuClick}
        isOpen={open === OpenState.Open}
      />
      <NavbarMobileUnorderedList
        style={{ display: open === OpenState.InitialClosed ? "none" : "block" }}
        className={`${
          open === OpenState.Open ? "animate-slide-in-from-right" : ""
        } ${open === OpenState.Closed ? "animate-slide-out-to-right" : ""}`}
      >
        <li>
          <NavbarMobileListHeading>4NEX</NavbarMobileListHeading>
        </li>
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Home}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Home}
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.About}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.About}
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Services}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Services}
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Team}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Team}
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Contact}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Contact}
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href="javascript:void(0);"
            onClick={() => setLanguage(nextLanguage)}
          >
            <NavbarDesktopIcon src={getCountryFlag(language)} />
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <li>
          <NavbarMobileLink
            href="javascript:void(0);"
            onClick={() => setUseDarkMode(!useDarkMode)}
          >
            <NavbarDesktopIcon
              src={useDarkMode ? CrescentMoon.src : LightBulb.src}
            />
          </NavbarMobileLink>
        </li>
        <NavbarMobileLinkSeparator />
        <NavbarMobileText>{dictionary.Navbar.MobileText}</NavbarMobileText>
      </NavbarMobileUnorderedList>
    </NavbarMobileWrapper>
  );
}
