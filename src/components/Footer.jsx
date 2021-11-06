import React from 'react'

export default function Footer() {
    return (
        
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <img className="img-fluid" src="images/logo-imvt.png" alt="logo" />
                               
                            </div>
                            <div className="col-sm-9 text-sm-right mt-4 mt-sm-0">
                                <ul className="list-unstyled mb-0 social-icon">
                                    <li><a href="https://www.facebook.com/IMVirtualTech" target="_blink"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/imvirtualtech/" target="_blink"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/IMVirtualTech" target="_blink"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/imvirtualtech/" target="_blink"><i className="fab fa-linkedin-in" target="_blink"></i></a></li>
                                    <li><a href="https://www.tumblr.com/blog/imvirtualtech" target="_blink"><i className="fab fa-tumblr"></i></a></li>

                                    <li><a href="https://www.reddit.com/user/imvirtualtech" target="_blink"><i className="fab fa-reddit"></i></a></li>

                                    <li><a href="https://github.com/IMVirtualTech" target="_blink"><i className="fab fa-github"></i></a></li>





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
                                    <li><a href="web-development">Web Designing &amp; Development</a></li>
                                    <li><a href="logo-design">Logo Designing</a></li>
                                    <li><a href="broucher-flyer">Brochures &amp; Flyer Designing</a></li>
                                    <li><a href="digital-marketing">Digital Marketing</a></li>
                                    <li><a href="seo">Search Engine Optimization</a></li>
                                </ul>
                                <ul className="list-unstyled mb-0">
                                    <li><a href="mobile-app-development">Mobile App Development</a></li>
                                    <li><a href="data-analysis">Data Analysis</a></li>
                                    <li><a href="software-development">Software Development</a></li>
                                    <li><a href="AI-Machine-Learning">AI &amp; Machine Learning</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                            <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="about-us">About</a></li>
                                    <li><a href="IT-blog">IT Blog</a></li>
                                    <li><a href="careers">Career</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
                            <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">


                                    <li><a href="contact-us">Contact Us</a></li>


                                    <li><a href="privacy-policy">Privacy Policy</a></li>
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
                                        <h4 className="mb-0 font-weight-bold"><a href="tel:+91 95947 89463">+91 95947 89463</a></h4>
                                    </div>
                                    <div className="contact-item">
                                        <label>Email:</label>
                                        <a className="text-dark" href="mailto:it@imvirtualtech.com">it@imvirtualtech.com</a>
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
                                <p className="mb-0">Copyright© 2021 <a href="https://imvirtualtech.com/">IMVirtualTech</a> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
    )
}
