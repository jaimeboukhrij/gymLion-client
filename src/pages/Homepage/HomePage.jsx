import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap"
import { Link } from 'react-router-dom';

import './HomePage.css';

function HomePage() {


    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <section data-nav={navVisible}>
            <main style={{ backgroundImage: "url(../../home1.jpg)" }}></main>

            <div id='nav' style={{ background: "white" }}>
                <div id="nav-links" style={{ paddingLeft: "6%" }}>
                    <Link to={"/nutrition"} className="nav-link" href="#">
                        <h2 className="nav-link-label rubik-font">NUTRITION</h2>
                        <img
                            className="nav-link-image"
                            src="../../home2.jpg"
                            alt=""
                        />
                    </Link>
                    <Link to={"/training"} className="nav-link" href="#">

                        <h2 className="nav-link-label rubik-font">TRAINING</h2>
                        <img
                            className="nav-link-image"
                            src="../../home3.jpg"

                            alt=""
                        />
                    </Link>
                    <Link to={"/social"} className="nav-link" href="#">

                        <h2 className="nav-link-label rubik-font">SOCIAL</h2>
                        <img
                            className="nav-link-image"
                            src="../../home4.jpg"

                            alt=""
                        />
                    </Link>
                    <a className="nav-link" href="#">
                        <h2 className="nav-link-label rubik-font">ABOUT US</h2>
                        <img
                            className="nav-link-image"
                            src="../../lion2.png"

                            alt=""
                        />
                    </a>

                </div>
            </div>

            <button id="nav-toggle" type="button" onClick={toggleNav}>
                <i className="open fa-light fa-bars-staggered"> Comencemos</i>
                <i className="close fa-light fa-xmark-large">X</i>
            </button>
        </section>
    );
}

export default HomePage;
