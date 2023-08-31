import FooterScolarity from "components/ecole-college/shared/FooterScolarity";
import NavigationScolarity from "components/ecole-college/shared/NavigationScolarity";
import StylizedH1 from "components/shared/StylizedH1";
import React from "react";
import "styles/ecole-college/About/_about.scss";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <title>Histoire - Collège alternatif Bordeaux</title>
        <meta
          name="description"
          content="Découvrez l'histoire de notre collège alternatif L'envol, de 2020 à aujourd'hui !"
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <StylizedH1 h1="Qui sommes-nous ?" />
        <section className="about-us">
          <article className="history-episode">
            <h3>L'origine</h3>
            <div className="episode-content">
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </article>
          <article className="history-episode">
            <h3>Déménagement</h3>
            <div className="episode-content">
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </article>
          <article className="history-episode">
            <h3>La suite</h3>
            <div className="next">
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </article>
        </section>
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default About;
