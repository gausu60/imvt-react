import React from 'react'

export default function Goals() {
    return (
            <section className="space-pb">
                <div className="container">
                    <div className="row justify-content-center pb-4 pb-md-5">
                        <div className="col-lg-10">
                            <div className="d-md-flex align-items-center">

                                <div className="mr-3">
                                    <h2 className="mb-0">We enable constant enterprise transformation at speed and scale.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex h-100">
                                <div className="nav flex-column nav-pills w-100 align-self-lg-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="mission-and-vision-tab" data-toggle="pill" href="#mission-and-vision" role="tab" aria-controls="mission-and-vision" aria-selected="true"><span className="data-hover" data-title="Mission and vision">Mission and vision</span></a>
                                    <a className="nav-link" id="our-challenges-tab" data-toggle="pill" href="#our-challenges" role="tab" aria-controls="our-challenges" aria-selected="false"><span className="data-hover" data-title="Our challenges">Our challenges</span></a>
                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#technology-partners" role="tab" aria-controls="technology-partners" aria-selected="false"><span className="data-hover" data-title="Technologies">Technologies</span></a>
                                    <a className="nav-link" id="meet-the-our-team-tab" data-toggle="pill" href="#meet-the-our-team" role="tab" aria-controls="meet-the-our-team" aria-selected="false"><span className="data-hover" data-title="Meet the our team">Meet the our team</span></a>
                                    <a className="nav-link" id="careers-with-us-tab" data-toggle="pill" href="#careers-with-us" role="tab" aria-controls="careers-with-us" aria-selected="false"><span className="data-hover" data-title="Careers with us">Careers with us</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mt-3 mt-md-0">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade active show" id="mission-and-vision" role="tabpanel" aria-labelledby="mission-and-vision-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/Mission&amp;Vision.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center pl-md-0 pl-lg-5">
                                            <h4><i className="flaticon-target text-primary mr-2"></i> Our Mission</h4>
                                            <p className="mb-4">Our mission is to be the industry's premier service provider company concentrated on fulfilling the maximum to our clients. </p>
                                            <h4><i className="flaticon-eye text-primary mr-2"></i> Our Vision</h4>
                                            <p className="mb-4">Our Vision is to be a top Web Design company in the IT sector and progress in our current position in the market. </p>
                                            <h6 className="font-weight-normal text-muted mt-4">Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="our-challenges" role="tabpanel" aria-labelledby="our-challenges-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/business-people-entrepreneur.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center pl-md-0 pl-lg-5">
                                            <h4 className="mb-4 text-dark">“We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.”</h4>
                                            <p className="d-flex align-items-center mb-4">
                                                <span className="font-weight-bold text-dark mr-2">Alice Williams</span> -
                                                <label className="ml-2 mb-0">Sales and Marketing</label>
                                            </p>
                                            <p className="mb-4">We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.</p>
                                            <a href="#" className="btn btn-primary-round btn-round">Learn More<i className="fas fa-arrow-right pl-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="technology-partners" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/Technology.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center pl-md-0 pl-lg-5">
                                            <h4 className="text-dark"> Technologies </h4>
                                            <div className="row">
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/Angular.jpg" alt="angular" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/ps.jpg" alt="photoshop" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/Java-Logo.png" alt="java" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/Javascript.jpg" alt="javascript" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/mongo-db-logo.jpg" alt="mongodb" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/MySQL-Logo.png" alt="mysql" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/php-logo.png" alt="php" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/python-logo.png" alt="python" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/react.png" alt="reactjs" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/wordpress.png" alt="wordpress" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/corel-draw.png" alt="corel-draw" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/tech/AI.png" alt="adobe illustrator" />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <a className="btn btn-primary-round btn-round" href="#">Our Technologie Use</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="meet-the-our-team" role="tabpanel" aria-labelledby="meet-the-our-team-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/Meet-Our-Team.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center pl-md-0 pl-lg-5">
                                            <div className="row">
                                                <div className="col-12 mb-4">
                                                    <h4 className="text-dark">Meet Our Leaders</h4>
                                                    <p>Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours.</p>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/02.jpg" alt="" />
                                                        </div>
                                                        <div className="team-info">
                                                            <a href="#" className="team-name">Khalid Shaikh</a>
                                                            <p>Chief Executive Officer</p>
                                                            <ul className="list-unstyled">
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/01.jpg" alt="" />

                                                        </div>
                                                        <div className="team-info">
                                                            <a href="#" className="team-name">Shakib Raza</a>
                                                            <p>Vice President</p>

                                                            <ul className="list-unstyled">
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/07.jpg" alt="" />
                                                        </div>
                                                        <div className="team-info">
                                                            <a href="#" className="team-name">Gausuddeen Shaikh</a>
                                                            <p>Managing Director</p>
                                                            <ul className="list-unstyled">
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <a className="btn btn-primary-round btn-round" href="#">View Our Team</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="careers-with-us" role="tabpanel" aria-labelledby="careers-with-us-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/career-with-us.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center pl-md-0 pl-lg-5">
                                            <h4 className="mb-2">Are you the best?</h4>
                                            <p className="mb-4">There’s always room for intelligent people who are excited about the digital world and are continually looking forward to seeing what’s next.</p>
                                            <h5>Why work with us?</h5>
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <ul className="list list-unstyled">
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Flexible Time Off </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>24/7 parking. </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Full medical benefits </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Pto / vacation</span></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="list list-unstyled">
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Flexible hours</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Collaborative environment</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Health, Dental, And Vision</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pr-2 pt-1 text-primary"></i><span>Collaborative environment</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-primary-round btn-round mt-2">View Available Positions<i className="fas fa-arrow-right pl-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}
