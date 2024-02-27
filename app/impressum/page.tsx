"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";
import {
  ImpressumDiv,
  ImpressumLogoImage,
  ImpressumLogoLink,
  ImpressumPage,
} from "./page.style";

export default function Page() {
  const [dictionary] = useLanguageContext();

  return (
    <ImpressumPage>
      <ImpressumDiv>
        <ImpressumLogoLink href="./">
          <ImpressumLogoImage src="./whiteLogoToUpdate.png" alt="4NEX Logo" />
        </ImpressumLogoLink>
        <h1>{dictionary.Footer.imprint}</h1>
        Roman Dietenmeier
        <br />
        Boksberg 16
        <br />
        24149 Kiel
        <br />
        &nbsp;
        <br />
        Handy: +49 (0) 152 254 079 40
        <br />
        E-Mail: contact@romandietenmeiertechnik.de
      </ImpressumDiv>
    </ImpressumPage>
  );
}
