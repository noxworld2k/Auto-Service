import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import Header from "./components/header";
import Maincontent from "./components/maincontent";
import Blurbs from "./components/blurbs";
import ContactMain from "./contact";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AboutUsMain from "./about";
import {
    HashRouter,
    Route,
    Routes,
    Router,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Main from "./main";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/contact" element={<ContactMain/>}/>
                <Route path="/about" element={<AboutUsMain/>}/>
            </Routes>
        </HashRouter>

    )
}


export default App;
