import React from "react";
import "../scss/aboutUs.scss";
import {Link} from "react-router-dom";
import aboutus1 from "../images/about1.png";



function AboutUs() {
    return (
        <section className="aboutus__container">

                <div className="aboutus__container__images">
                    <img src={aboutus1} className="img1"/>
                </div>

                <div className="aboutus__content">
                    <div className="aboutus__content__text">
                        <div className="aboutus__content__text-title">
                            <h1>About <span>US</span></h1>

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis,
                            nisl nisi consectetur nisi, euismod eget nisl nisi
                            consectetur nisi.
                        </p>
                        <Link className="about-link" to="/about">Read More</Link>
                    </div>
                </div>

        </section>

    )
}

export default AboutUs;