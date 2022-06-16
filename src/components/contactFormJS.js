import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "../scss/contact.scss";

const resultStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "15px 0",
    padding: "0",
    textAlign: "center",
    borderRadius: "20%",
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
                <input type="text" required="true" name="user_name" placeholder="Enter Your Name"/>
                <input type="email" required="true" name="user_email" placeholder="Enter Your Email"/>
                <input type="date" required="true" name="start_date" placeholder="Get Repair Date"/>
                <textarea name="message" required="true" placeholder="Write something about your car"/>
                <button type="submit" onClick={handleClick} >Send Message</button>
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
