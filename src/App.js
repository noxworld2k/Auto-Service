import React from 'react';
import "firebase/auth";
import './scss/main.scss';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Main from "./routes/main";
import AboutUsMain from "./routes/about";
import ContactMain from "./routes/contact";
import Login from "./routes/login";
import Admin from "./routes/admin";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path="/contact" element={<ContactMain/>}/>
                <Route path="/about" element={<AboutUsMain/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="/login" element={<Admin/>}/>*/}
            </Routes>
        </HashRouter>

    )
}


export default App;
