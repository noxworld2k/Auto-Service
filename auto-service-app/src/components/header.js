import logo from "../images/logo.jpg";
import "../scss/header.scss";
function Header() {
    return (
        <div className="full-width">
            <header className="container">
                <div className="nav__menu">
                    <ul>
                        <li ><a href="#">Home Page</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="nav__logo">
                    <img src={logo}  alt="logo" />
                </div>
                <div className="nav__login">
                    <a href="#" className="btn login__button">Login</a>
                </div>
            </header>
        </div>
    );
}

export default Header;