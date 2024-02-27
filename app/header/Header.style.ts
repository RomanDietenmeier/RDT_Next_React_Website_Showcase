"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "../../ui/metrics";
import { ZIndex } from "../../ui/zIndex";
import { NavbarDesktopLink } from "./NavbarDesktop.style";
import { NavbarMobileBurgerMenu } from "./NavbarMobile.style";

export const HeaderScrollerPercentage = styled.div.attrs<{ width: number }>(
  (props) => ({
    style: { width: `${props.width}%` },
  })
)`
  position: fixed;
  z-index: ${ZIndex.HeaderNavBar};
  top: 0;
  left: 0;

  height: 4px;

  background-color: ${(p) => p.theme.color.accent};

  transition: width 0.3s;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
`;

export const HeaderLogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const HeaderLogoImage = styled.img`
  height: 2.6rem;
`;

export const HeaderHeader = styled.header<{
  enableBackground: boolean;
  useDarkMode: boolean;
}>`
  position: fixed;
  z-index: ${ZIndex.HeaderNavBar};

  width: calc(100% - ${metrics.pagePadding * 2}rem);
  padding: ${metricsRem.pagePadding};

  background-color: ${(p) =>
    p.enableBackground ? p.theme.header.background : "transparent"};
  box-shadow: 0 0 8px
    rgba(
      ${(p) => p.theme.header.backgroundRGB},
      ${(p) => p.theme.header.backgroundRGB},
      ${(p) => p.theme.header.backgroundRGB},
      ${(p) => (p.enableBackground ? 1 : 0)}
    );

  transition: 0.5s;

  ${NavbarDesktopLink} {
    color: ${(p) => (p.enableBackground ? p.theme.color.text : undefined)};
  }

  ${NavbarMobileBurgerMenu} {
    &::before {
      background-color: ${(p) =>
        p.enableBackground == false && !p.useDarkMode ? "white" : undefined};
    }
  }
`;
