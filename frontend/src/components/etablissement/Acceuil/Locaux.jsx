import React from "react";
import Button from "../../shared/Button";

const Locaux = () => {
  return (
    <section className="locaux">
      <h3>Des locaux au coeur de Bordeaux</h3>
      <div className="locaux-container">
        <div className="locaux-school">
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
              <Button color="orange" />
            </div>
            <img src="" alt="maps API" />
          </div>
        </div>
        <div className="locaux-college">
          <h4>Le collège</h4>
          <div className="local">
            <img src="" alt="maps API" />
            <div className="local-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                numquam debitis officia veritatis corporis incidunt ratione est?
                Praesentium ipsum dolore dolores distinctio, consequatur quidem
                aliquam ullam at itaque veritatis aspernatur minima! Blanditiis,
                distinctio accusantium quidem dolor magni est a consequuntur
                beatae explicabo voluptatibus! Quibusdam, animi.
              </p>
              <Button color="blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locaux;
