import React from "react";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import HeroPedagogie from "../../components/ecole&college/shared/Pedagogie/HeroPedagogie";
import Materials from "../../components/ecole&college/shared/Pedagogie/Materials";
import EnglishPedagogie from "../../components/ecole&college/shared/Pedagogie/EnglishPedagogie";
import AvantagePedagogie from "../../components/ecole&college/shared/Pedagogie/AvantagePedagogie";
import FooterScolarity from "../../components/ecole&college/shared/FooterScolarity";
import AvantagesPedagogie from "../../components/ecole&college/shared/Pedagogie/AvantagesPedagogie";

const Pedagogie = () => {
  const imagesMaterials = [
    // les paths des images des locaux de l'école
  ];
  return (
    <>
      <NavigationScolarity etablissement="college" />
      <HeroPedagogie
        h1="Notre pédagogie"
        title="Une pédagogie à l'écoute de l'enfant"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            dignissimos, distinctio velit tempore ab blanditiis ducimus
            similique id porro, autem in tenetur consectetur cum architecto
            quasi. Ut autem cumque sequi itaque voluptatum sapiente
            praesentium delectus temporibus ipsa consequatur officiis cum vel
            culpa accusantium quis omnis, dolorem fugiat quisquam reprehenderit
            eum."
        image="img/path"
      />
      <Materials
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
        images={imagesMaterials}
      />
      <EnglishPedagogie
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
        image="path/img"
      />
      <AvantagesPedagogie />
      <FooterScolarity etablissement="college" />
    </>
  );
};

export default Pedagogie;
