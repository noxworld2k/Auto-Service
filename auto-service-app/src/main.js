
import './App.css';
import Header from "./components/header";
import Maincontent from "./components/maincontent";
import Blurbs from "./components/blurbs";
import Contact from "./components/contact";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


function Main() {
    return (
        <>
            <Header/>
            <Maincontent/>
            <Blurbs/>
            <Footer/>
        </>

    )
}

export default Main;
