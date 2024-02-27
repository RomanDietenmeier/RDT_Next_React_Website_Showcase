import { useContext } from "react";
import {
  ContentSection,
  ContentSectionHeading,
  ContentSectionParagraph,
  ContentSectionWrapper,
} from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";
import {
  AboutSection,
 
} from "./About.style";

export function About() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.About}>
        <AboutSection>
            <SectionTitle
              title={dictionary.Navbar.About}
              targetId={NavbarRouteLinks.About}
            />
            <ContentSectionHeading>{dictionary.About.h1}</ContentSectionHeading>
            <ContentSectionParagraph>{dictionary.About.p}</ContentSectionParagraph>
          </AboutSection>    
      </ContentSection> 
    </ContentSectionWrapper>
  );
}
