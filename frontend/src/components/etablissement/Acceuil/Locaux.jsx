import React from "react";
import Button from "../../shared/Button";
import test from "assets/img/test.JPG";
import { Loader } from "@googlemaps/js-api-loader";

const Locaux = () => {
  return (
    <section className="locaux">
      <h3>Des locaux au coeur de Bordeaux</h3>
      <article className="locaux-container">
        <article className="locaux-school">
          <h4>L'école</h4>
          <div className="local">
            <div className="local-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea
                quae perspiciatis obcaecati similique impedit, facere fugit quia
                dicta. Inventore commodi neque, iure eius cumque iusto autem ex!
                Nisi voluptate explicabo minus optio rem culpa et quasi vitae!
                Repudiandae tenetur architecto recusandae, alias asperiores
                modi!
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
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=122%20cours%20journu%20auber+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                numquam debitis officia veritatis corporis incidunt ratione est?
                Praesentium ipsum dolore dolores distinctio, consequatur quidem
                aliquam ullam at itaque veritatis aspernatur minima! Blanditiis,
                distinctio accusantium quidem dolor magni est a consequuntur
                beatae explicabo voluptatibus! Quibusdam, animi.
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
