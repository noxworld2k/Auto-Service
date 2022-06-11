import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/footer";
import Header from "./components/header";
import "./scss/login.scss";

function Login () {
    return (
        <>
            <Header />
            <div className="full-width">
                <div className="container login__form">
                    <RegistrationForm />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
