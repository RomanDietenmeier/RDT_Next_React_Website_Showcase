"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "./metrics";

export const ContentSectionWrapper = styled.div`
  width: 100%;
`;

export const ContentSection = styled.section`
 
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  padding: 0 ${metricsRem.pagePadding} 3rem ${metricsRem.pagePadding};
`;

export const ContentSectionHeading = styled.h1`
  margin-top: 0;

  font-size: 3.5rem; //ToDo set font size via Media query depending on screen size(width)
  font-family: 'Epilogue', Arial, "Helvetica Neue", Helvetica, sans-serif;
  @media (max-width: ${metricsRem.mobileMaxWidth}) {
    font-size: 1.4rem;
    line-height: 35px;
  }
`;

export const ContentSectionParagraph = styled.p`
  font-family: 'Epilogue', Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
 line-height: 50px;
  @media (max-width: ${metricsRem.mobileMaxWidth}) {
    font-size: 1.11rem;
    line-height: 27px;
  }
`;

export const ContentSectionLineItem = styled.li`
  font-family: 'Epilogue', Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
 line-height: 50px;
  @media (max-width: ${metricsRem.mobileMaxWidth}) {
    font-size: 1.11rem;
    line-height: 27px;
  }
`;

export const ResponsiveFlexGrid = styled.div<{ columns: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  max-width: ${(p) => metricsRem.maxPageContentWidth};

  > * {
    flex-basis: ${(p) => metrics.maxPageContentWidth / p.columns}rem;
  }
`;
