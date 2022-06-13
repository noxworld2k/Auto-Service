import "../scss/contact.scss";
import ContactFormJS from "./contactFormJS";


function Contact() {
    return (
        <section className="contact__section">
            <div className="container">
                <div className="contact__box">
                    <h2>
                        Zapraszamy do kontaktu
                    </h2>
                    <p>
                        Jakieś tam pierdoły
                    </p>
                </div>
                <ContactFormJS/>

            </div>

        </section>
        )
}
export default Contact;