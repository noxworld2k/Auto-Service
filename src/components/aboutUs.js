import "../scss/aboutUs.scss";
import vision from "../images/ourvision.webp";
import about from "../images/about1.jpg";

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="container">
                <div className="aboutUs__container__content">
                    <h2>
                        About Us
                    </h2>
                    <img src={about} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi vel consectetur euismod,
                        nisi nisl consectetur nisi, euismod euismod nisi
                        nisl euismod nisi.
                    </p>

                </div>
                <div className="aboutUs__container__content">
                    <h3>Our Vision</h3>
                    <img src={vision}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi vel consectetur euismod,
                        nisi nisl consectetur nisi, euismod euismod nisi
                        nisl euismod nisi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;