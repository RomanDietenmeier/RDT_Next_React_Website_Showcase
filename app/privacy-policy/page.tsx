"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";
import {
  ImpressumDiv,
  ImpressumLogoImage,
  ImpressumLogoLink,
  ImpressumPage,
} from "../impressum/page.style";

export default function Page() {
  const [dictionary] = useLanguageContext();

  return (
    <ImpressumPage>
      <ImpressumDiv>
        <ImpressumLogoLink href="./">
          <ImpressumLogoImage src="./whiteLogoToUpdate.png" alt="4NEX Logo" />
        </ImpressumLogoLink>
        <h2>{dictionary["Privacy Policy"].title}</h2>
        <p>
          <strong>
            {dictionary["Privacy Policy"]["responsible person heading"]}
          </strong>
        </p>
        <p>
          {dictionary["Privacy Policy"]["responsible person"]}
          <br />
          {dictionary["Privacy Policy"]["address street"]}
          <br />
          {dictionary["Privacy Policy"]["address city"]}
          <br />
          {dictionary["Privacy Policy"]["phone"]}
          <br />
          {dictionary["Privacy Policy"]["email"]}
        </p>

        <h3>{dictionary["Privacy Policy"]["kind of data heading"]}</h3>
        <ul>
          <li>{dictionary["Privacy Policy"]["kind of data"]}</li>
        </ul>

        <h3>{dictionary["Privacy Policy"]["purpose heading"]}</h3>
        <p>{dictionary["Privacy Policy"]["purpose"]}</p>

        <h3>{dictionary["Privacy Policy"]["usage of data heading"]}</h3>
        <p>{dictionary["Privacy Policy"]["usage of data"]}</p>

        <h3>{dictionary["Privacy Policy"]["storage duration heading"]}</h3>
        <p>{dictionary["Privacy Policy"]["storage duration"]}</p>

        <h3>
          {dictionary["Privacy Policy"]["right of the affected person heading"]}
        </h3>
        <p>{dictionary["Privacy Policy"]["right of the affected person p1"]}</p>
        <p>{dictionary["Privacy Policy"]["right of the affected person p2"]}</p>
        <p>{dictionary["Privacy Policy"]["right of the affected person p3"]}</p>
        <p>{dictionary["Privacy Policy"]["right of the affected person p4"]}</p>
        <p>{dictionary["Privacy Policy"]["right of the affected person p5"]}</p>

        <h3>{dictionary["Privacy Policy"]["right of revocation heading"]}</h3>
        <p>{dictionary["Privacy Policy"]["right of revocation"]}</p>
      </ImpressumDiv>
    </ImpressumPage>
  );
}
