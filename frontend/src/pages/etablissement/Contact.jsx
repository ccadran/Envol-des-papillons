import React from "react";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import StylizedH1 from "../../components/shared/StylizedH1";
import ContactInfo from "../../components/etablissement/Contact/ContactInfo";
import ContactForm from "../../components/etablissement/Contact/ContactForm";
import FooterGlobal from "../../components/shared/FooterGlobal";
const Contact = () => {
  return (
    <>
      <NavigationGlobal />
      <StylizedH1 />
      <section className="contact-container">
        <ContactInfo />
        <ContactForm />
      </section>
      <FooterGlobal />
    </>
  );
};

export default Contact;
