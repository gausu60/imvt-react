import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <img className="img-fluid" src="images/logo-imvt.png" alt="logo" />
                               
                            </div>
                            <div className="col-sm-9 text-sm-right mt-4 mt-sm-0">
                                <ul className="list-unstyled mb-0 social-icon">
                                    <li><a to="https://www.facebook.com/IMVirtualTech" target="_blink"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a to="https://www.instagram.com/imvirtualtech/" target="_blink"><i className="fab fa-instagram"></i></a></li>
                                    <li><a to="https://twitter.com/IMVirtualTech" target="_blink"><i className="fab fa-twitter"></i></a></li>
                                    <li><a to="https://www.linkedin.com/company/imvirtualtech/" target="_blink"><i className="fab fa-linkedin-in" target="_blink"></i></a></li>
                                    <li><a to="https://www.tumblr.com/blog/imvirtualtech" target="_blink"><i className="fab fa-tumblr"></i></a></li>

                                    <li><a to="https://www.reddit.com/user/imvirtualtech" target="_blink"><i className="fab fa-reddit"></i></a></li>

                                    <li><a to="https://github.com/IMVirtualTech" target="_blink"><i className="fab fa-github"></i></a></li>





                                </ul>
                            </div>
                        </div>
                        <hr className="my-4 my-sm-5 pb-0" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <h5 className="text-primary mb-2 mb-sm-4">IT Services</h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/web-development">Web Designing &amp; Development</Link></li>
                                    <li><Link to="/logo-design">Logo Designing</Link></li>
                                    <li><Link to="/broucher-flyer">Brochures &amp; Flyer Designing</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                    <li><Link to="/seo">Search Engine Optimization</Link></li>
                                </ul>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                    <li><Link to="/data-analysis">Data Analysis</Link></li>
                                    <li><Link to="/software-development">Software Development</Link></li>
                                    <li><Link to="/AI-Machine-Learning">AI &amp; Machine Learning</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                            <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/about-us">About</Link></li>
                                    <li><Link to="/IT-blog">IT Blog</Link></li>
                                    <li><Link to="/about-us">Career</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
                            <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">


                                    <li><Link to="/contact-us">Contact Us</Link></li>


                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-contact-info">
                                <h5 className="text-primary mb-3">Contact IMVirtualTech</h5>
                                <div className="contact-address">
                                    <div className="contact-item">
                                        <label>Address:</label>
                                        <p>Mumbai | Maharashtra | India</p>
                                    </div>
                                    <div className="contact-item">
                                        <label>Phone:</label>
                                        <h4 className="mb-0 font-weight-bold"><Link to="tel:+91 95947 89463">+91 95947 89463</Link></h4>
                                    </div>
                                    <div className="contact-item">
                                        <label>Email:</label>
                                        <Link className="text-dark" to="mailto:it@imvirtualtech.com">it@imvirtualtech.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-sm-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p className="mb-0">Copyright© 2021 <Link to="/">IMVirtualTech</Link> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
