import styled from "styled-components";
import { metricsRem } from "../../ui/metrics";

export const FooterFooter = styled.footer`
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  padding: 0 ${metricsRem.pagePadding};

  font-size: 15px;
  color: rgb(
    ${(p) => p.theme.color.textRGB} ${(p) => p.theme.color.textRGB}
      ${(p) => p.theme.color.textRGB} / 70%
  );

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const FooterParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px; 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    > span,
    > a {
      margin-bottom: 15px; 
    }
    > span:last-child,
    > a:last-child {
      margin-bottom: 25px; 
    }
  }
`;