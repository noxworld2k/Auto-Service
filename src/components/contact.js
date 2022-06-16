import "../scss/contact.scss";
import ContactFormJS from "./contactFormJS";
import MapComponent, {Map} from "./map/Map";

const location = {
    address: 'Koszulki.Shop Piaskowa 18, Rybie.',
    lat: 52.15733351715033,
    lng: 20.940302645284405,
}

function Contact() {
    return (
        <section className="contact__section">

                <div className="contact__box">
                    <h2>
                        Please Contact Us
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <ContactFormJS/>
                </div>
                <div className="contact__map">
                    <h2>
                        Our Localization
                    </h2>
                    <MapComponent location={location}/>
                </div>




        </section>
    )
}

export default Contact;