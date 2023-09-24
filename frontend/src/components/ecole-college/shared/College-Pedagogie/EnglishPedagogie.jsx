import React from "react";

const EnglishPedagogie = ({ text, image }) => {
  const containerStyle = {
    whiteSpace: "pre-line", // Cette ligne permet de conserver les sauts de ligne
  };

  return (
    <section className="english">
      <h3>L'importance des langues</h3>
      <div className="english-container" style={containerStyle}>
        <p>
          <span>L’anglais :</span> nos élèves ont des cours d’anglais à raison
          d’environ 4h/semaine. Le petit effectif permet une pratique orale de
          chacun, sans jugement. <br />
          <br /> <span>L’espagnol :</span> notre deuxième langue est initiée dès
          la 6ème (1h/semaine) puis les élèves des autres niveaux l’étudient 3h
          par semaine. <br />
          <br /> Le collège prévoit l’organisation de séjours linguistiques tous
          les 2 ans (destination Anglophone ou Hispanique). Les élèves
          participent activement aux préparatifs. Par exemple, ils choisissent
          ensemble la destination pour se projeter et s’approprier leur voyage.
          Ils s’engagent dans des recherches d’aides financières, mènent des
          projets dans ce sens.
        </p>
        <div className="img-container">
          <img
            src={image}
            alt="illustration apprentissage de l'anglais"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EnglishPedagogie;
