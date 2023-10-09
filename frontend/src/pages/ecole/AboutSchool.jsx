import NavigationScolarity from "components/ecole-college/shared/NavigationScolarity";
import React from "react";
import StylizedH1 from "components/shared/StylizedH1";
import FooterScolarity from "components/ecole-college/shared/FooterScolarity";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Histoire - École montessori Bordeaux</title>
        <meta
          name="description"
          content="Découvrez l'histoire de notre école Montessori L'envol des papilons, de 2012 à aujourd'hui !"
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <StylizedH1 h1="Qui sommes-nous ?" />
        <section className="about-us">
          <article className="history-episode">
            <h3>L'origine</h3>
            <div className="episode-content">
              <p>
                Laurence Cadran, mère de deux jeunes enfants, a pratiqué la
                pédagogie Montessori au quotidien avec ses enfants pendant leurs
                années de maternelle. Suite à cela est née l’idée de créer une
                école afin d’offrir aux enfants bordelais une autre forme
                d’éducation, l’agglomération bordelaise ne comptant alors qu’une
                seule école Montessori à Latresne. L’école L’envol des papillons
                voit le jour en septembre 2012, sous une forme associative.
              </p>
              <div className="img-container">
                <img src="" alt="img a droite" loading="lazy" />
              </div>
            </div>
          </article>
          <article className="history-episode">
            <h3>Les premiers locaux</h3>
            <div className="episode-content">
              <div className="img-container">
                <img src="" alt="img a droite" loading="lazy" />
              </div>
              <p>
                L’école ouvre ses portes dans le quartier des Chartrons, au
                niveau de l’arrêt Camille Godard du tram C. Une grande pièce
                accueille une vingtaine d’enfants de 3 à 6 ans, qui peuvent
                s’épanouir dans cet espace lumineux doté du matériel Montessori.
                Deux autres petites pièces servent de salle de sieste et d’art.
              </p>
            </div>
          </article>
          <article className="history-episode">
            <h3>Déménagement</h3>
            <div className="episode-content">
              <p>
                En 2015, les premiers enfants scolarisés en 2012, devaient
                entrer en CP. Les parents souhaitent fortement que leurs enfants
                poursuivent cet enseignement, et se lancent activement dans la
                recherche de nouveaux locaux. C’est chose faite et en septembre
                2015, l’école emménage dans ses locaux actuels, au 125 cours
                Journu Auber. Trois grandes salles de classe lumineuses de 70 M2
                accueillent les enfants de 2 ans ½ à 12 ans, répartis en trois
                groupes (maternelle, 6-8 ans et 8-11 ans).
              </p>
              <div className="img-container">
                <img src="" alt="img a droite" loading="lazy" />
              </div>
            </div>
          </article>
          <article className="history-episode">
            <h3>L'ouverture du collège</h3>
            <div className="episode-content">
              <div className="img-container">
                <img src="" alt="img a droite" loading="lazy" />
              </div>
              <p>
                En 2020, sous l’impulsion de quelques parents d’élèves, le
                collège L’envol est créé, dirigé également par Laurence Cadran.
                Un petit groupe de 8 élèves débute cette année scolaire dans des
                locaux proches de l’école. En 2022, le collège s’implante dans
                des locaux plus grands (109 bis cours du Médoc) et accueille
                alors une vingtaine d’élèves de la 6ème à la 3ème. En 2023, ils
                sont 30 jeunes.
              </p>
            </div>
          </article>
          <article className="history-episode">
            <h3>La suite</h3>
            <div className="next">
              <p>
                Encore un projet de déménagement pour le collège. En 2024, il
                s’implantera juste à côté de l’école L’envol des papillons, au
                123 cours Journu Auber. Les deux établissements seront enfin
                réunis, distants de quelques mètres l’un de l’autre. Un grand
                jardin arboré complète ces locaux, permettant aux collégiens et
                aux enfants de l’école de profiter de cet espace pour jouer,
                jardiner, bâtir des cabanes…
              </p>
            </div>
          </article>
        </section>
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default About;
