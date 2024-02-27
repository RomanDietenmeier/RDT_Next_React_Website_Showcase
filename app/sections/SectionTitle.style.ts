"use client";

import styled from "styled-components";

export const SectionTitleHeadingBase = styled.h3`
  display: inline-block;

  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: 530;
  font-style: normal;
  line-height: 21px;
  color: ${(p) => p.theme.color.accent};
  
@media (width <= 768px) {
  font-size: 1.4rem;
}
`;

export const SectionTitleHeading = styled(SectionTitleHeadingBase)`
  &::before {
    content: "/ ";
  }
`;
