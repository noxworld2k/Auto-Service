import React from "react";
import "../scss/maincontent.scss";
import {Link} from "react-router-dom";


function MainContent() {


    return (
        <div className="main__content">
            <div className="main__content__filter">
                <div className="title">
                    <div className="title__container">
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
                    <Link to="/">CHECK OUR OFFER</Link>
                </div>
            </div>
        </div>
    );
}

export default MainContent;