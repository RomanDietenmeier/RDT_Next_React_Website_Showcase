import styled, { keyframes } from "styled-components";

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateOut = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const NavbarMobileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavbarMobileBurgerMenu = styled.span<{ isOpen: boolean }>`
  cursor: pointer;
  z-index: 1999;
  padding: 1rem 1.5rem;

  &::before {
    content: "";

    display: inline-block;

    width: 1rem;
    height: 1rem;

    background-color: ${(props) =>
      props.isOpen ? "white" : props.theme.card.text};

    mask: url(${(props) =>
        props.isOpen ? "./burger-menu2.svg" : "./burger-menu.svg"})
      no-repeat center;

    animation: ${(props) => (props.isOpen ? rotateIn : rotateOut)} 0.3s
      ease-in-out;

    mask-size: cover;
  }
`;

export const NavbarMobileUnorderedList = styled.ul`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;

  width: 35vw;
  height: 100vh;
  margin: 0;
  padding: 2rem;

  list-style-type: none;

  background-color: transparent;
  background-color: rgb(0 0 0 / 90%);
  border-left: 2px solid rgb(21 106 183 / 30%);
`;

export const NavbarMobileLink = styled.a`
  display: inline-block;

  width: calc(100% - 2rem);
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 80;
  line-height: 20px;
  color: white;
  text-decoration: none;

  background-color: transparent;

  transition: color 0.3s ease;

  &:hover {
    color: ${(p) => p.theme.color.accent};
  }
`;

export const NavbarMobileLinkSeparator = styled.hr`
  margin: 0.2rem 0;
  border: 0;
  border-top: 1px solid rgb(128 128 128 / 40%);
`;

export const NavbarMobileListHeading = styled.h2`
  margin-top: -9%;
  margin-bottom: 1.5rem;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.7rem;
  color: ${(p) => p.theme.color.accent};
`;

export const NavbarMobileText = styled.p`
  margin-top: 2rem;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 70;
  font-style: normal;
  line-height: 25px;
  color: ${(p) => p.theme.color.accent};
`;
