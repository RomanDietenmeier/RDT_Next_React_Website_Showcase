"use client";
import Link from "next/link";
import styled from "styled-components";
import { HeaderLogoImage } from "../header/Header.style";

export const ImpressumPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;

  background-color: #000;
`;

export const ImpressumDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  height: fit-content;
  margin: auto;
  margin: 1rem;
  padding: 1rem;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 3px 0 rgb(255 255 255 / 10%);
`;

export const ImpressumLogoLink = styled(Link)`
  margin: auto;
`;

export const ImpressumLogoImage = styled(HeaderLogoImage)`
  margin: 0 auto;
  padding: 1rem;
`;
