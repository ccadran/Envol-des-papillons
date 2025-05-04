import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import HeroPedagogie from "../../components/ecole-college/shared/Pedagogie/HeroPedagogie";
import Materials from "../../components/ecole-college/shared/Pedagogie/Materials";
import ClassesSchoolPedagogie from "../../components/ecole-college/ClassesSchoolPedagogie";
import EnglishPedagogie from "../../components/ecole-college/shared/Pedagogie/EnglishPedagogie";
import AvantagePedagogie from "../../components/ecole-college/shared/Pedagogie/AvantagePedagogie";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import AvantagesPedagogie from "../../components/ecole-college/shared/Pedagogie/AvantagesPedagogie";
import "styles/ecole-college/Pedagogie/_pedagogie.scss";
import { Helmet } from "react-helmet";

const Pedagogie = () => {
  return (
    <>
      <Helmet>
        <title> Pédagogie - École montessori Bordeaux</title>
        <meta
          name="description"
          content="L'école Montessori L'envol des papillons vous propose de découvrir sa pédagogie grâce à laquelle nous cultivons la curiosité naturelle de chaque enfant pour un apprentissage épanouissant et durable. "
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <HeroPedagogie
          h1="Notre pédagogie"
          title="Une pédagogie à l'écoute de l'enfant"
          image={process.env.PUBLIC_URL + "/assets/img/school-pedagogie.jpg"}
        />
        <Materials
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
          images={[
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials1.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials2.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials3.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials4.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials5.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials6.jpg",
            },
            {
              src: process.env.PUBLIC_URL + "/assets/img/school-materials7.jpg",
            },
          ]}
        />
        <ClassesSchoolPedagogie />
        <EnglishPedagogie
          text="L’anglais est pratiqué trois demi-journées par semaine, avec une personne ne parlant qu’en anglais aux enfants, offrant ainsi une immersion importante.

          À partir de 2026, l'école basculera sur un mode de fonctionnement bilingue(4 demi-journées par semaines).
          
          Le matériel utilisé pour développer le vocabulaire des enfants est laissé à leur disposition, leur permettant de retravailler ce qui a été vu."
          image={process.env.PUBLIC_URL + "/assets/img/school-anglais.jpg"}
        />
        <AvantagePedagogie />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default Pedagogie;
