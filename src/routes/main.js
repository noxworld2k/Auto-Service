import '../App.css';
import React from 'react';
import Header from "../components/header";
import Maincontent from "../components/maincontent";
import Blurbs from "../components/blurbs";
import Footer from "../components/footer";
import AboutUs from "../components/aboutUs";
import Client from "../components/client";


function Main() {
    return (
        <>
            <Header/>
            <Maincontent/>
            <AboutUs/>
            <Blurbs/>
            <Client/>
            <Footer/>
        </>

    )
}

export default Main;
