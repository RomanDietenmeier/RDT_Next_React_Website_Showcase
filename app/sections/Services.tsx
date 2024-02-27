import { useContext } from "react";
import {
  ContentSection,
  ContentSectionHeading,
  ContentSectionParagraph,
  ContentSectionWrapper,
  ResponsiveFlexGrid,
} from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";
import {
  CardContactButton,
  ContentSectionContainer,
  ServiceImage,
  ServiceWrapper,
} from "./Services.style";
export function Services() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.Services}>
        <ContentSectionContainer>
          <SectionTitle
            className="animate-slide-in-from-bottom-5rem-target-class"
            title={dictionary.Navbar.Services}
            targetId={NavbarRouteLinks.Services}
          />
          <ContentSectionHeading className="animate-slide-in-from-bottom-5rem-target-class">
            {dictionary.Services.h1}
          </ContentSectionHeading>
          <ContentSectionParagraph className="animate-slide-in-from-bottom-5rem-target-class">
            {dictionary.Services.p}
          </ContentSectionParagraph>

          <ResponsiveFlexGrid columns={3}>
            <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <ServiceImage src="./sma.jpeg" />
              <h3>{dictionary.Services["Social Media Analytics"].h3}</h3>
              <p>{dictionary.Services["Social Media Analytics"].p}</p>
              <CardContactButton href={NavbarRouteLinks.Contact}>
                {dictionary.Home.Casestudy}
              </CardContactButton>
            </ServiceWrapper>

            <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <ServiceImage src="./Software_Engineering.jpg" />
              <h3>{dictionary.Services["Image Recognition"].h3}</h3>
              <p>{dictionary.Services["Image Recognition"].p}</p>
              <CardContactButton href="./case-studies/image-recognition">
                {dictionary.Home.Casestudy}
              </CardContactButton>
            </ServiceWrapper>

            <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <ServiceImage src="./AI KiI.jpg" />
              <h3>{dictionary.Services["AI Chatbot"].h3}</h3>
              <p>{dictionary.Services["AI Chatbot"].p}</p>
              <CardContactButton href="./case-studies/ai-chatbot">
                {dictionary.Home.Casestudy}
              </CardContactButton>
            </ServiceWrapper>

            <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
              <ServiceImage src="./Chatbot.jpg" />
              <h3>{dictionary.Services["Machine Learning"].h3}</h3>
              <p>{dictionary.Services["Machine Learning"].p}</p>
              <CardContactButton href={NavbarRouteLinks.Contact}>
                {dictionary.Home.Casestudy}
              </CardContactButton>
            </ServiceWrapper>
          </ResponsiveFlexGrid>
        </ContentSectionContainer>
      </ContentSection>
    </ContentSectionWrapper>
  );
}
