"use client";
import styled from "styled-components";
import { ZIndex } from "../../ui/zIndex";

export const StartPageWrapper = styled.section<{ backgroundImage: string }>`
  position: relative;
  z-index: ${ZIndex.Default};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-image: url(${(p) => p.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 0.625rem #000;

  transition: background-image 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    z-index: ${ZIndex.StartPageBackgroundImage};
    inset: 0;

    opacity: 0.7;
    background-color: #000;
  }
`;

export const StartPageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    margin-top: -150px;
  }
`;

export const StartPagePreTitle = styled.span`
  margin-bottom: 50px;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  line-height: 31px;
  color: ${(p) => p.theme.color.accent};
  transition: opacity 0.5s ease-in-out; 
  @media (width <= 768px) {
    margin-bottom: 30px;
    font-size: 15px;
  }
`;

export const StartPageTitle = styled.span`
  width: 70%;
  margin-bottom: 70px;
  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 110px;
  font-weight: 600;
  font-style: normal;
  line-height: 110px;
  color: rgb(255 255 255);
  text-align: center;

  @media (width <= 768px) {
    width: 80%;
    margin-bottom: 30px;
    font-size: 35px;
    line-height: 40px;
  }
`;

export const StartPageContactButton = styled.a`
  cursor: pointer;

  width: 400px;
  padding: 10px 20px;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: rgb(255 255 255);
  text-align: center;
  text-decoration: none;

  background-color: ${(p) => p.theme.color.accent};
  border: none;
  border-radius: 25px;
  outline: none;

  transition: background-color 0.3s, color 0.3s; /* Füge eine Übergangseffekt hinzu */
  &:hover {
    background-color: #1e90ff;
  }

  &:active {
    background-color: black; /* Ändere die Hintergrundfarbe im Aktivzustand */
  }

  @media (width <= 768px) {
    width: 70%;
    width: 200px;
    font-size: 16px;
  }
`;

export const StartPageArrowLink = styled.a`
  position: absolute;
  bottom: 3rem;
  padding: 1rem;
`;

export const StartPageArrow = styled.img`
  pointer-events: none;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  animation: scroll-down 2s infinite;
  animation-delay: 2500ms;
`;
