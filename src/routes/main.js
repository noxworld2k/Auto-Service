import '../App.css';
import React from 'react';
import Header from "../components/header";
import Maincontent from "../components/maincontent";
import Blurbs from "../components/blurbs";
import Footer from "../components/footer";
import AboutUs from "../components/aboutUs";
import Client from "../components/client";
import Contact from "../components/contact";


function Main() {
    return (
        <>
            <Header/>
            <Maincontent/>
            <AboutUs/>
            <Blurbs/>
            <Client/>
            <Contact/>
            <Footer/>
        </>

    )
}

export default Main;
