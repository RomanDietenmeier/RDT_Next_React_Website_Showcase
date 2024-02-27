"use client";

import styled from "styled-components";

export const GoUpDiv = styled.div<{ text: string }>`
  cursor: pointer;
  position: relative;

  &::before {
    content: "${(p) => p.text}";

    position: absolute;
    top: -50px;
    left: -27px;
    transform: rotate(-90deg);

    width: 4rem;

    color: rgb(
      ${(p) => p.theme.color.textRGB} ${(p) => p.theme.color.textRGB}
        ${(p) => p.theme.color.textRGB} / 85%
    );
    white-space: nowrap;
  }
`;

export const GoUpSvg = styled.svg`
  > path {
    fill: rgb(
      ${(p) => p.theme.color.textRGB} ${(p) => p.theme.color.textRGB}
        ${(p) => p.theme.color.textRGB} / 70%
    );
  }
`;
