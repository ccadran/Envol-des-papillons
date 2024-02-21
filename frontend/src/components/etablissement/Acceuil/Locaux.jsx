import React from "react";
import Button from "../../shared/Button";
import test from "assets/img/test.JPG";
import { Loader } from "@googlemaps/js-api-loader";

const Locaux = () => {
  return (
    <section className="locaux">
      <h3>Des locaux au cœur de Bordeaux</h3>
      <article className="locaux-container">
        <article className="locaux-school">
          <h4>L'école</h4>
          <div className="local">
            <div className="local-text">
              <p>
                L’école est située dans le quartier des Chartrons à Bordeaux
                (125 cours Journu Auber), à 15’ du centre de Bordeaux,
                facilement accessible en tram (ligne C – Arrêt Grand Parc) ou en
                bus (liane 5).
              </p>
              <Button
                color="orange"
                text="Nos locaux"
                link="/ecole/presentation/"
              />
            </div>
            <div className="img-container">
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=125%20cours%20journu%20auber+(L'envol%20des%20papillons)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </article>
        <article className="locaux-college">
          <h4>Le collège</h4>
          <div className="local">
            <div className="img-container">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=109%20cours%20du%20m%C3%A9doc+(L'envol%20des%20papillons,%20l'%C3%89cole)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="local-text">
              <p>
                Le collège alternatif l’Envol a trouvé sa place dans un local
                parfaitement situé au cœur du quartier des Chartrons à Bordeaux
                (109 bis cours du Médoc),{" "}
                <span>facilement accessible en tram ou en bus</span>.
              </p>
              <Button
                color="blue"
                text=" Nos locaux"
                link="/college/presentation"
              />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Locaux;
