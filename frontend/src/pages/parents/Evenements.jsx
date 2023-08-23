import React from "react";
import NavigationParents from "../../components/parents/NavigationParents";
import H2HeroText from "../../components/parents/H2HeroText";
import ParentsContent from "../../components/parents/menus&events/ParentsContent";
import FooterParents from "components/parents/FooterParents";
import "styles/parents/Evenements/_evenements.scss";
import { Helmet } from "react-helmet";

const Evenements = () => {
  return (
    <>
      <Helmet>
        <title>Événements - Parents</title>
      </Helmet>

      <NavigationParents />
      <main>
        <H2HeroText
          h2="Le calendrier des événements"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad  diam sit amet lacinia. Aliquam in elementum tellus."
        />
        <div className="events-container">
          <iframe
            className="events"
            src="https://calendar.google.com/calendar/embed?src=montessorilenvoldespapillons%40gmail.com&ctz=Europe%2FParis"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </main>
      <FooterParents />
    </>
  );
};

export default Evenements;
