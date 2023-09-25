import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import HeroPedagogie from "../../components/ecole-college/shared/College-Pedagogie/HeroPedagogie";
import Materials from "components/ecole-college/shared/College-Pedagogie/Materials";
import EnglishPedagogie from "components/ecole-college/shared/College-Pedagogie/EnglishPedagogie";
import AvantagePedagogie from "../../components/ecole-college/shared/Pedagogie/AvantagePedagogie";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import AvantagesPedagogie from "../../components/ecole-college/shared/College-Pedagogie/AvantagesPedagogie";
import imgPedagogie from "assets/img/college-pedagogie.jpg";
import { Helmet } from "react-helmet";
import imgMaterial1 from "assets/img/college-materials1.jpg";
import imgMaterial2 from "assets/img/college-materials2.jpg";
import imgMaterial3 from "assets/img/college-materials3.jpg";
import Brevet from "components/ecole-college/shared/College-Pedagogie/Brevet";

const Pedagogie = () => {
  const imagesArray = {
    imgMaterial1,
    imgMaterial2,
    imgMaterial3,
  };

  const imagesMaterials = [];

  for (let i = 1; i <= Object.keys(imagesArray).length; i++) {
    const imageKey = `imgMaterial${i}`;
    imagesMaterials.push({ src: imagesArray[imageKey] });
  }
  // uter un alt dans mon object
  return (
    <>
      <Helmet>
        <title>Pédagogie - Collège alternatif Bordeaux</title>
        <meta
          name="description"
          content="Le collège alternatif L'envol vous propose de découvrir sa pédagogie grâce à laquelle nous cultivons la curiosité naturelle de chaque enfant pour un apprentissage épanouissant et durable. "
        />
      </Helmet>
      <NavigationScolarity etablissement="college" />
      <main>
        <HeroPedagogie
          h1="Notre pédagogie"
          title="Une pédagogie à l'écoute de l'enfant"
          image={imgPedagogie}
        />
        <Materials images={imagesMaterials} />
        <EnglishPedagogie
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
          image="path/img"
        />
        <Brevet />
        <AvantagesPedagogie />
      </main>
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Pedagogie;
