import React from "react";
import "../../scss/AboutUsPage/AboutUsPage.scss"
import about from "../../images/aboutusphoto.jpg";
import {BsFillCartPlusFill, BsFillDiagram3Fill, BsPeopleFill} from "react-icons/bs";
import {SiHandshake} from "react-icons/si";



function AboutUsPage() {


    return (
        <>
            <section className="container__aboutus">
                <div className="aboutus__absolute">

                </div>
                <div className="container container__cover-absolute">
                    <div className="container__aboutus-image">
                        <h1>
                            ABOUT OUR COMPANY
                        </h1>
                        <img src={about} alt="about us"/>
                    </div>

                    <div className="blurb__about__us-container">
                        <div className="blurb__about__us">
                            <div className="blurb__about__us-icon">
                                <BsFillDiagram3Fill/>
                            </div>
                            <h2>
                                Strategy
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="blurb__about__us-container">
                        <div className="blurb__about__us">
                            <div className="blurb__about__us-icon">
                                <BsPeopleFill/>
                            </div>
                            <h2>
                                Management
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="blurb__about__us-container">
                        <div className="blurb__about__us">
                            <div className="blurb__about__us-icon">
                                <BsFillCartPlusFill/>
                            </div>
                            <h2>
                                Procurement
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="blurb__about__us-container">
                        <div className="blurb__about__us">
                            <div className="blurb__about__us-icon">
                                <SiHandshake/>
                            </div>
                            <h2>
                                Consultation
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="aboutus__desc">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl nunc
                            consectetur nisi, eu aliquam nisl nisi euismod nisl.
                            Donec euismod, nisl eget consectetur sagittis, nisl nunc
                            consectetur nisi, eu aliquam nisl nisi euismod nisl.
                            Donec euismod, nisl eget consectetur sagittis, nisl nunc
                            consectetur nisi, eu aliquam nisl nisi euismod nisl.
                            Donec euismod, nisl eget consectetur sagittis, nisl nunc
                            consectetur nisi, eu aliquam nisl nisi euismod nisl.
                            Donec euismod, nisl eget consectetur sagittis, nisl nunc
                            consectetur nisi, eu aliquam nisl nisi euismod nisl.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUsPage;