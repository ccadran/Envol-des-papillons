import React from "react";
import NavigationScolarity from "../../components/ecole&college/shared/NavigationScolarity";
import StylizedH1 from "../../components/shared/StylizedH1";
import HeroFAQ from "../../components/ecole&college/shared/FAQ/HeroFAQ";
import SectionFAQ from "../../components/ecole&college/shared/FAQ/SectionFAQ";
import ContentFAQ from "../../components/ecole&college/shared/FAQ/ContentFAQ";

const FAQ = () => {
  return (
    <>
      <NavigationScolarity etablissement="college" />
      <HeroFAQ
        subTitle="Retrouvez les réponses aux questions les plus posées (pour l’école)"
        text="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        "
      />
      <ContentFAQ etablissement="College" />
    </>
  );
};

export default FAQ;
