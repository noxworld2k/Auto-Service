import "../scss/contact.scss";


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
                <div className="form__box">
                    <form>
                        <label>
                            Imie i nazwisko: <input type="text" />
                        </label>
                        <label>
                            Email: <input type="email"/>
                        </label>
                        <label>
                            Wiadomość: <textarea/>
                        </label>
                        <button type="submit">Send message to Messiah</button>
                    </form>

                </div>

            </div>

        </section>
        )
}
export default Contact;