import { useContext } from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { ContentSection, ContentSectionHeading } from "../../ui/general.style";
import { GoUp } from "../components/GoUp";
import LanguageContext from "../components/LanguageContext";

import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  ContactContainer,
  ContactFormWrapper,
  ContactGoUpWrapper,
  ContactInfoContainer,
  ContactInfoContent,
  ContactInfoHeading,
  ContactInfoIconContent,
  ContactInfoItem,
  ContactInfoText,
  ContactWrapper,
} from "./Contact.style";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <div className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.Contact}>
        <ContactContainer>
          <SectionTitle
            title={dictionary.Navbar.Contact}
            targetId={NavbarRouteLinks.Contact}
          />

          <div>
            <div>
              <ContentSectionHeading>
                {" "}
                {dictionary.Contact.h1}
              </ContentSectionHeading>
            </div>
            <ContactWrapper>
              <ContactInfoContainer>
                <ContactInfoItem>
                  <ContactInfoIconContent as={FaHome} />
                  <ContactInfoContent>
                    <ContactInfoHeading>
                      {dictionary.Contact.Adress}
                    </ContactInfoHeading>
                    <ContactInfoText>
                      Wasseralfingen, Deutschland
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                <ContactInfoItem>
                  <ContactInfoIconContent as={FaPhone} />
                  <ContactInfoContent>
                    <ContactInfoHeading>
                      {dictionary.Contact.Phone}
                    </ContactInfoHeading>
                    <ContactInfoText>
                      <a href="tel:+4915225407940">+49 (0) 152 254 079 40</a>
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                <ContactInfoItem>
                  <ContactInfoIconContent as={FaEnvelope} />
                  <ContactInfoContent>
                    <ContactInfoHeading>
                      {dictionary.Contact.Email}
                    </ContactInfoHeading>
                    <ContactInfoText>
                      {" "}
                      <a href="mailto:contact@romandietenmeiertechnik.de">
                        contact@romandietenmeiertechnik.de
                      </a>{" "}
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
              </ContactInfoContainer>
              <ContactFormWrapper>
                <form action="send_mail.php" method="post" id="contact-form">
                  <h2>{dictionary.Contact.FormText}</h2>
                  <div className="input-box">
                    <input type="text" required name="fullname" />
                    <span>{dictionary.Contact.FormName}</span>
                  </div>
                  <div className="input-box">
                    <input type="email" required name="email" />
                    <span>{dictionary.Contact.FormEmail}</span>
                  </div>
                  <div className="input-box">
                    <textarea required name="message"></textarea>
                    <span>{dictionary.Contact.FormMessage}</span>
                  </div>
                  <div className="input-box">
                    <input
                      type="submit"
                      value={dictionary.Contact.FormSubmit}
                    />
                  </div>
                </form>
              </ContactFormWrapper>
              <ContactGoUpWrapper>
                <GoUp />
              </ContactGoUpWrapper>
            </ContactWrapper>
          </div>
        </ContactContainer>
      </ContentSection>
    </div>
  );
}
