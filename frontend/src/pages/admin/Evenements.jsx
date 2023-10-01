import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import H1HeroText from "../../components/shared/H1HeroText";
import { Helmet } from "react-helmet";
import Button from "components/shared/Button";

const Evenements = () => {
  return (
    <>
      <Helmet>
        <title>Événements - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <H1HeroText
          h1="Evenements"
          text="Gérez les évènements de votre établissement"
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
    </>
  );
};

export default Evenements;
