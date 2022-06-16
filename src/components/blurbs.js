import "../scss/blurbs.scss";
import img1 from "../images/icon1.png";
import img2 from "../images/icon2.png";
import img3 from "../images/icon3.png";
import {Link} from "react-router-dom";


function Blurbs() {
    return (
        <>
        <section className="blurbs__section">
            <div className="blurbs__box">
                <h1>
                    REGISTER AND BOOK A REPAIR
                </h1>
            </div>
            <div className="container blurb">
                <div className="blurb__box">
                    <img src={img1} />
                    <div className="blurb__box-content">
                    <h2>
                        Car diagnostic
                    </h2>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                    </p>
                    <Link to="/">Read More</Link>
                    </div>
                </div>
                <div className="blurb__box">
                    <img src={img2} />
                    <div className="blurb__box-content">
                    <h2>
                        Car electrics
                    </h2>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                    </p>
                    <Link to="/">Read More</Link>
                    </div>
                </div>
                <div className="blurb__box">
                    <img src={img3} />
                    <div className="blurb__box-content">
                        <h2>
                            car air conditioning
                        </h2>
                        <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quidem.
                        </p>
                        <Link to="/">Read More</Link>
                    </div>

                </div>

            </div>


        </section>
        </>
    )
}

export default Blurbs;