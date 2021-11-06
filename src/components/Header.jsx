import React from 'react'

export default function Header() {
    return (
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
                                            <li><a href="careers">Careers</a></li>

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
                        <a className="navbar-brand" href="/">
                            <img className="img-fluid" src="images/logo-imvt.png" alt="logo"/>
                        </a>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item  active">
                                    <a className="nav-link" href="/" role="button">Home</a>

                                </li>
                                <li className="dropdown nav-item">
                                    <a href="services.html" className="nav-link" data-toggle="dropdown">Services</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="web-development">Web Designing &amp; Development<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="logo-design">Logo Designing<i className="fas fa-arrow-right"></i></a></li>

                                        <li><a className="dropdown-item" href="broucher-flyer">Brochures &amp; Flyer Designing<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="digital-marketing">Digital Marketing<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="seo">Search Engine Optimization<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="mobile-app-development">Mobile App Development<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="data-analysis">Data Analysis<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="software-development">Software Development<i className="fas fa-arrow-right"></i></a></li>
                                        <li><a className="dropdown-item" href="AI-Machine-Learning">AI &amp; Machine Learning<i className="fas fa-arrow-right"></i></a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="our-projects" className="nav-link">Our Projects</a>

                                </li>
                                <li className=" nav-item">
                                    <a href="what-we-do" className="nav-link">What We Do </a>

                                </li>

                                <li className=" nav-item">
                                    <a href="about-us" className="nav-link">About Us</a>

                                </li>

                                <li className=" nav-item">
                                    <a href="contact-us" className="nav-link">Contact Us</a>

                                </li>




                            </ul>
                        </div>
                        <div className="d-none d-sm-flex ml-auto mr-5 mr-lg-0 pr-4 pr-lg-0">
                            <ul className="nav ml-1 ml-lg-2 align-self-center">
                                <li className="contact-number nav-item pr-4 ">
                                    <a className="font-weight-bold" href="tel:+91 95947 89463"><i className="fab fa-whatsapp pr-2"></i>+91 95947 89463</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        
    )
}
