import Link from "next/link";
import { useContext } from "react";
import { ContentSectionWrapper } from "../../ui/general.style";
import { FooterFooter, FooterParagraph } from "./Footer.style";
import LanguageContext from "../components/LanguageContext";

export function Footer() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <FooterFooter>
        <FooterParagraph>
          <span>{dictionary.Footer.copyright}</span>
          <Link href="./privacy-policy">
            {dictionary.Footer["privacy policy"]}
          </Link>
          <Link href="./impressum">{dictionary.Footer.imprint}</Link>
        </FooterParagraph>
      </FooterFooter>
    </ContentSectionWrapper>
  );
}
