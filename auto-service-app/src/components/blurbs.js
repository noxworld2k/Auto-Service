import "../scss/blurbs.scss";
import img from "../images/placholder__blurb.png";


function Blurbs() {
    return (
        <>
        <section className="blurbs__section">
            <div className="container">
                <div className="blurb__box">
                    <img src={img} />
                    <h2>
                        Jakiś tam tytułek
                    </h2>
                    <p>
                        Pieprzony opis co robimy z twoim autem haha.
                    </p>
                </div>
                <div className="blurb__box">
                    <img src={img} />
                    <h2>
                        Jakiś tam tytułek
                    </h2>
                    <p>
                        Pieprzony opis co robimy z twoim autem haha.
                    </p>
                </div>
                <div className="blurb__box">
                    <img src={img} />
                    <h2>
                        Jakiś tam tytułek
                    </h2>
                    <p>
                        Pieprzony opis co robimy z twoim autem haha.
                    </p>
                </div>

            </div>


        </section>
        </>
    )
}

export default Blurbs;