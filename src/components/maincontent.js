import React from "react";
import "../scss/maincontent.scss";
import addUserToDataBase from "./test.js";
import AddUserToDataBase from "../functions/test";



function MainContent() {




    return (
      <div className="main__content">
          <div>
              <h1>
                  We fix every car in the world
              </h1>
              <p>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.
                  Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.
              </p>

              <a href="#">Reservation</a>
              <a href="#">Register</a>

              <AddUserToDataBase />


          </div>
      </div>
    );
}

export default MainContent;