import "../scss/footer.scss";
import logo from "../images/logo.png";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";




function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">

        <div className="footer__container__text">
            <h3>
                Our Company details
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
            </p>
            <p>
                © 2022 Auto Service. All rights reserved for NoxWorld Company.
            </p>
            <p>
                Programmer: Patryk Kowalczyk
            </p>
            <p>
                Desinger: Aleksandra Nadrowska
            </p>
        </div>
          <div className="footer__container__logo">
              <img src={logo} alt="logo" />
          </div>
          <div className="footer__container__social">
              <Link to="/">  <BsFacebook size={50} color="##187dd3"/> </Link>
              <Link to="/"> <BsTwitter size={50} color="#4c9ae7"/> </Link>
              <Link to="/"> <BsInstagram color="#a224cb" size={50} /> </Link>

          </div>
        </div>
    </footer>
    );
}
export default Footer;