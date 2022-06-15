import React from "react";
import "../scss/aboutUs.scss";
import {Link} from "react-router-dom";
import aboutus1 from "../images/aboutus/1i.jpg";
import aboutus2 from "../images/aboutus/2i.jpg";


function AboutUs() {
    return (
        <section className="aboutus__container">
            <div className="container" >
                <div className="aboutus__container__images">
                    <img src={aboutus1} className="img1"/>
                    <img src={aboutus2} className="img2"/>

                </div>

                <div className="aboutus__content">
                    <div className="aboutus__content__text">
                        <div className="aboutus__content__text-title">
                            <h1>About</h1>
                            <h2>Us</h2>
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
            </div>

        </section>

    )
}

export default AboutUs;