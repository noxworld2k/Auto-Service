import logo from "../images/logo.jpg";
import "../scss/header.scss";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="full-width">
            <header className="container">
                <div className="nav__logo">
                    <img src={logo}  alt="logo" className="logo"/>
                </div>
                <div className="nav__menu">
                    <ul>
                        <li ><Link to="/">Home Page</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/">Reservation</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <a href="#" className="btn login__button">Login</a>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

npm i @react-firebase/auth
npm i