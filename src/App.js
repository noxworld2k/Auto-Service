import React from 'react';
import ContactMain from "./contact";
import AboutUsMain from "./about";
import "firebase/auth";
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from "./main";
import Login from "./login";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/contact" element={<ContactMain/>}/>
                <Route path="/about" element={<AboutUsMain/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </HashRouter>

    )
}


export default App;
