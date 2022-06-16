import React from "react";
import "../scss/maincontent.scss";


function MainContent() {


    return (
        <div className="main__content">
            <div className="main__content__filter">
            <div>
                <div  className="title__container">
                    <h1 className="car">
                        Car
                    </h1>
                    <h1 className="service">
                        Service
                    </h1>
                </div>

                <p>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.
                    Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.
                </p>
            </div>
            </div>
        </div>
    );
}

export default MainContent;