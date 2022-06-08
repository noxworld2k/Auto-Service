import "../scss/footer.scss";
import logo from "../images/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="footer__container__text">
            <p>
                  © 2022 Auto Service. All rights reserved for NoxWorld Company.
            </p>
        </div>
        </div>
    </footer>
    );
}
export default Footer;