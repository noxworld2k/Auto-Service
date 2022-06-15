import React from "react";
import {Link} from "react-router-dom";
import "../scss/client.scss";
import client1 from "../images/Photo.png";
import client from "../images/Client.jpg";




function Client() {
  return (
      <>
        <div className="book__repair">
          <h1>REGISTER AND BOOK A REPAIR</h1>
          <Link to="/">CHECK DATES</Link>
        </div>
        <section className="client">
          <div className="container">
            <div className="client__desc">
              <h1>What Client Say</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              </p>
              <div className="client__desc-joe">
                <img className="client__image-joe" src={client}/>
                <div>
                  <h2>
                    Jane Doe
                  </h2>
                  <p>
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>

            <div className="client__images">
                <img className="client__images-1" src={client1}/>
            </div>
          </div>

        </section>

      </>
  );
}

export default Client;
