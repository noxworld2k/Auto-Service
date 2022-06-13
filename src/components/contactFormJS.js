import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "../scss/contact.scss";

const resultStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "15px 0",
    padding: "0",
    textAlign: "center",
    borderRadius: "20px",
    backgroundColor: "#79dc63"
}


const ContactUs = () => {
    const admin = "Noxworld";
    const form = useRef();
    const [submit, setSubmit] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0qmkssq', 'template_yp4zw2l', form.current, 'HXGMavF3GHeyGRM3U')
            .then(() =>
                setSubmit('Message sent!')
            )
            .catch(() =>
                setSubmit('Message not sent!')
            );
    };

    useEffect(() => {
        document.p = `${submit}`;
    }, [submit]);

    const handleClick = () => {
        setSubmit(() => submit);
    }


    return (
        <div className="form__box">
            <form ref={form} onSubmit={sendEmail} name={admin}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <input type="date" name="start_date"/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" onClick={handleClick}  value="Send Message to Prophet NoX"/>

            </form>
            <div style={resultStyle}>
                <p>
                    {submit}
                </p>
            </div>

        </div>
    );
};

export default ContactUs;
