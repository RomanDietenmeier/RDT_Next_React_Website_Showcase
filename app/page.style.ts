import styled from "styled-components";
import { ContentSectionWrapper } from "../ui/general.style";

export const AppWrapper = styled.div`
  color: ${(p) => p.theme.color.text};
  background-color: ${(p) => p.theme.color.background};

  ${ContentSectionWrapper}:nth-child(2n) {
    background-color: rgba(
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.backgroundInverseAlpha}
    );
  }
`;
