import { useContext, useEffect, useState } from "react";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageContactButton,
  StartPagePreTitle,
  StartPageTextWrapper,
  StartPageTitle,
  StartPageWrapper,
} from "./StartPage.style";

const imageSources = ["./background2.png", "./background2.png"];
const services = [
  "Web Dev",
  "Software Engineering",
  "Chat Bots",
  "Machine Learning",
];

export function StartPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [servicesIndex, setTitleIndex] = useState(0);
  const { dictionary } = useContext(LanguageContext);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((index) => (index + 1) % imageSources.length);
    }, 5000);

    const servicesInterval = setInterval(() => {
      setTitleIndex((index) => (index + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(servicesInterval);
    };
  }, []);

  return (
    <StartPageWrapper
      id={NavbarRoutes.Home}
      backgroundImage={imageSources[imageIndex]}
    >
      <StartPageTextWrapper>
        <StartPagePreTitle>{dictionary.Home.Text1}</StartPagePreTitle>

        <StartPageTitle>{services[servicesIndex]}</StartPageTitle>
        <StartPageContactButton href={NavbarRouteLinks.Contact}>
          {dictionary.Home.Buttontext}
        </StartPageContactButton>
      </StartPageTextWrapper>

      <StartPageArrowLink href={NavbarRouteLinks.About}>
        <StartPageArrow src="./arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}
