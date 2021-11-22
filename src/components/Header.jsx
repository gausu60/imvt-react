import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header className="header default">
                <div className="topbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-block d-md-flex align-items-center text-center">
                                    <div className="mr-4 d-inline-block py-1">
                                        <a href="mailto:it@imvirtualtech.com"><i className="far fa-envelope mr-2 fa-flip-horizontal text-primary"></i>it@imvirtualtech.com</a>
                                    </div>
                                    <div className="mr-auto d-inline-block py-1">
                                        <a href="tel:1-800-555-1234"><i className="fas fa-map-marker-alt text-primary mr-2"></i>Mumbai | Maharashtra | India</a>
                                    </div>
                                    <div className="d-inline-block py-1">
                                        <ul className="list-unstyled">
                                            <li><Link to="/about-us">Careers</Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
                    <div className="container-fluid">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid" src="images/logo-imvt.png" alt="logo"/>
                        </Link>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item  active">
                                    <Link className="nav-link" to="/" role="button">Home</Link>

                                </li>
                                <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" data-toggle="dropdown">Services</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/web-development">Web Designing &amp; Development<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/logo-design">Logo Designing<i className="fas fa-arrow-right"></i></Link></li>

                                        <li><Link className="dropdown-item" to="/broucher-flyer">Brochures &amp; Flyer Designing<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/digital-marketing">Digital Marketing<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/seo">Search Engine Optimization<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/mobile-app-development">Mobile App Development<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/data-analysis">Data Analysis<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/software-development">Software Development<i className="fas fa-arrow-right"></i></Link></li>
                                        <li><Link className="dropdown-item" to="/AI-Machine-Learning">AI &amp; Machine Learning<i className="fas fa-arrow-right"></i></Link></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/our-projects" className="nav-link">Our Projects</Link>

                                </li>
                                <li className=" nav-item">
                                    <Link to="/what-we-do" className="nav-link">What We Do </Link>

                                </li>

                                <li className=" nav-item">
                                    <Link to="/about-us" className="nav-link">About Us</Link>

                                </li>

                                <li className=" nav-item">
                                    <Link to="/contact-us" className="nav-link">Contact Us</Link>

                                </li>




                            </ul>
                        </div>
                        <div className="d-none d-sm-flex ml-auto mr-5 mr-lg-0 pr-4 pr-lg-0">
                            <ul className="nav ml-1 ml-lg-2 align-self-center">
                                <li className="contact-number nav-item pr-4 ">
                                    <Link className="font-weight-bold" to="tel:+91 95947 89463"><i className="fab fa-whatsapp pr-2"></i>+91 95947 89463</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
