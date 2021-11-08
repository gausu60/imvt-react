import React from 'react'
import { Link } from "react-router-dom";

export default function Pagebanner() {
    return (
        <div>
            <section className="header-inner header-inner-menu bg-overlay-black-50" style={{backgroundImage: 'url(images/header-inner/01.jpg)'}}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="header-inner-title text-center">
                                <h1 className="text-white font-weight-normal" id="change-contents">About IMVirtualTech</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-inner-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <ul className="nav">
                                    <li className="nav-item"><Link className="nav-link active" id="about" to="/about-us">About us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" id="careers" to="/careers">Careers</Link></li>
                                    <li className="nav-item"><Link className="nav-link" id="how-we-work" to="how-we-work">How we work</Link></li>
                                    <li className="nav-item"><Link className="nav-link" id="our-team" to="our-team">Our team</Link></li>
                                    <li className="nav-item"><Link className="nav-link" id="mission" to="mission-vision">Mission and vision</Link></li>
                                    <li className="nav-item"><Link className="nav-link" id="our-value" to="our-value">Our values</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
