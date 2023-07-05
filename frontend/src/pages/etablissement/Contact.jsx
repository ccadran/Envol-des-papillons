import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import StylizedH1 from "../../components/shared/StylizedH1";
import ContactInfo from "../../components/etablissement/Contact/ContactInfo";
import ContactForm from "../../components/etablissement/Contact/ContactForm";
import FooterGlobal from "../../components/shared/FooterGlobal";
import { useLocation } from "react-router-dom";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
const Contact = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/etablissement/contact";
  const desiredPart = location.pathname.split("/")[1];
  const isRootPathColor = location.pathname.includes("/ecole");

  const color = isRootPathColor
    ? "orange"
    : location.pathname.includes("/college")
    ? "blue"
    : "violet";
  return (
    <>
      {isRootPath ? (
        <NavigationGlobal />
      ) : (
        <NavigationScolarity etablissement={desiredPart} />
      )}{" "}
      <main>
        <StylizedH1 h1="Contactez Nous" color={color} />
        <section className="contact-container">
          <ContactInfo />
          <ContactForm />
        </section>
      </main>
      {isRootPath ? (
        <FooterGlobal />
      ) : (
        <FooterScolarity etablissement={desiredPart} />
      )}{" "}
    </>
  );
};

export default Contact;
