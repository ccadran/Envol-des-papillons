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
          text="A partir de cette page, rendez vous sur notre calendrier en ligne pour découvrir les événements à venir, les sorties scolaires, les réunions parents-professeurs, les fêtes de fin d'année..."
        />
        <div className="events-container">
          <iframe
            className="events"
            src="https://calendar.google.com/calendar/embed?src=montessorilenvoldespapillons%40gmail.com&ctz=Europe%2FParis"
            frameborder="0"
            scrolling="no"
          ></iframe>
          <a href=""></a>
        </div>
      </main>
      <FooterParents />
    </>
  );
};

export default Evenements;
