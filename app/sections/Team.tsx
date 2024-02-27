import { useContext } from "react";
import {
  ContentSection,
  ContentSectionHeading,
  ContentSectionWrapper,
} from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";
import {
  TeamImage,
  TeamImageWrapper,
  TeamResponsiveFlexGrid,
  TeamSection,
} from "./Team.style";

export function Team() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.Team}>
        <TeamSection>
          <SectionTitle
            className="animate-slide-in-from-bottom-5rem-target-class"
            title={dictionary.Navbar.Team}
            targetId={NavbarRouteLinks.Team}
          />
          <ContentSectionHeading className="animate-slide-in-from-bottom-5rem-target-class">
            {dictionary.Team.h1}
          </ContentSectionHeading>
          <TeamResponsiveFlexGrid columns={5}>
            <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <TeamImage src="./Ahmed.jpg" alt="Ahmed" />
              <h3>Ahmed</h3>
              <p>Expert in Data Science & Mechatronics</p>
            </TeamImageWrapper>
            <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <TeamImage src="./Majd.jpg" alt="Majd" />
              <h3>Majd</h3>
              <p>
                Expert in Data Science & in Business Information Systems -
                Software Engineering
              </p>
            </TeamImageWrapper>
            <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <TeamImage src="./Roman.jpg" alt="Roman" />
              <h3>Roman</h3>
              <p>Expert in Data Science & Software Engineering</p>
            </TeamImageWrapper>
          </TeamResponsiveFlexGrid>
        </TeamSection>
      </ContentSection>
    </ContentSectionWrapper>
  );
}
