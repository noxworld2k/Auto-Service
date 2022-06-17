import logo from "../images/logo.png";
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
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Register</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
