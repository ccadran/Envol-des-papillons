import React from "react";
// import "styles/ecole-college/Presentation/_visionAndObjectifs.scss";

const VisionAndObjectifsScolarity = ({ vision, objectif }) => {
  return (
    <section className="visions-objectifs">
      <article className="vision-objectifs-container">
        <h3>Notre vision</h3>
        <ul>
          <li>
            <span>La bienveillance</span>. Pas de jugement, pas de notes (sauf
            en 3ème afin de leur permettre de se situer par rapport au brevet).
            Une évaluation en coopération avec l’élève.
          </li>
          <li>
            Une place réelle à la <span>créativité</span> et à la{" "}
            <span>libre expression</span> nécessaires à l’adolescent, dans le
            <span> respect</span> de sa personnalité et de ses spécificités.
            <span> Chaque élève est important !</span>
          </li>
          <li>
            Deux après-midi « projets » de 15h à 17h : projets
            pluridisciplinaires, projet philo, d’écriture, conseil d’école,
            expression créatrice, exposés, sorties scolaires…
          </li>
          <li>
            Des devoirs <span>limités</span>.
          </li>
          <li>
            <span>Absence de notes</span> jusqu’en 3ème.
          </li>
          <li>
            De petits effectifs de classe permettent un{" "}
            <span>suivi au plus proche de l’élève</span>.
          </li>
          <li>
            L’initiation à <span>des sports variés</span> en fonction des
            possibilités. Par exemple : du patin à glace, du badminton ou tennis
            de table, de l’athlétisme, du cyclisme au vélodrome de Bordeaux Lac,
            des sports collectifs…
          </li>
        </ul>
      </article>
      <article className="vision-objectifs-container">
        <h3>Nos objectifs</h3>
        <ul>
          <li>
            Développer <span>l’épanouissement</span> et la confiance en soi.
          </li>
          <li>
            Accompagner dans l’acquisition de <span>l’autonomie</span>.
          </li>
          <li>
            Encourager l’apprentissage de la <span>vie en collectivité</span> et
            du <span>travail collaboratif</span>.
          </li>
          <li>
            <span>Préparer aux épreuves du Brevet des collèges</span> pour les
            élèves de troisième.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default VisionAndObjectifsScolarity;
