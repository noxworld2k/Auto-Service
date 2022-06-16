import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import client from "../../images/Client.jpg";
import client1 from "../../images/Photo.png";


export default function Slider() {
    return (
    <AwesomeSlider
        animation="AwesomeAnimation"
        cssModule={AwesomeSliderStyles}
        bullets={true}
        bulletsSize={10}
        bulletsColor="#057c66"
        bulletsActiveColor="#fff"


    >
            <div>
                <div className="client__desc">
                    <h1>What Client Say</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    </p>
                    <div className="client__desc-joe">
                        <img className="client__image-joe" src={client}/>
                        <div>
                            <h2>
                                Jane Doe
                            </h2>
                            <p>
                                Lorem ipsum
                            </p>
                        </div>
                    </div>
                </div>

        </div>

        <div>
            <div className="client__desc">
                <h1>What Client Say</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                </p>
                <div className="client__desc-joe">
                    <img className="client__image-joe" src={client}/>
                    <div>
                        <h2>
                            Jane Doe
                        </h2>
                        <p>
                            Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <div className="client__desc">
                <h1>What Client Say</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                </p>
                <div className="client__desc-joe">
                    <img className="client__image-joe" src={client}/>
                    <div>
                        <h2>
                            Jane Doe
                        </h2>
                        <p>
                            Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </AwesomeSlider>
    );
}
