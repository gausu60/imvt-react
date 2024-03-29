import React,{useState} from 'react'

export default function Mission(props) {
    const [title]  = useState(props.title);
    document.title = title;
    return (
        <div>
            <section className="space-pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-title text-center">
                                <h2>We enable constant enterprise transformation at speed and scale.</h2>
                                <p>We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 mb-4 mb-sm-0">
                            <div className="feature-info feature-info-style-02 bg-dark text-white">
                                <div className="feature-info-icon">
                                    <i className="flaticon-eye text-white"></i>
                                    <h4 className="mb-0 ml-4 feature-info-title text-white">Our Vision</h4>
                                </div>
                                <div className="feature-info-content">
                                    <p className="mb-0">To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="feature-info feature-info-style-02 bg-primary text-white">
                                <div className="feature-info-icon">
                                    <i className="flaticon-target text-white"></i>
                                    <h4 className="mb-0 ml-4 feature-info-title text-white">Our Mission</h4>
                                </div>
                                <div className="feature-info-content">
                                    <p className="mb-0">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-sm-12">
                            <img className="img-fluid" src="images/bg/07.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-ptb">
                <div className="container">
                    <div className="row d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
                        <div className="col-lg-6">
                            <h2 className="mb-3 mb-lg-0">Three reasons why you should choose our service</h2>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right pl-3"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-info feature-info-style-07">
                                <div className="feature-info-img">
                                    <img className="img-fluid" src="images/blog/01.jpg" alt="" />
                                </div>
                                <div className="feature-info-content">
                                    <h4 className="feature-info-title">Mission and vision</h4>
                                    <p>Our Vision &amp; Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions.</p>
                                    <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-info feature-info-style-07">
                                <div className="feature-info-img">
                                    <img className="img-fluid" src="images/blog/02.jpg" alt="" />
                                </div>
                                <div className="feature-info-content">
                                    <h4 className="feature-info-title">Our challenges</h4>
                                    <p>We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.</p>
                                    <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-info feature-info-style-07">
                                <div className="feature-info-img">
                                    <img className="img-fluid" src="images/blog/03.jpg" alt="" />
                                </div>
                                <div className="feature-info-content">
                                    <h4 className="feature-info-title">Meet the our team</h4>
                                    <p>Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours.</p>
                                    <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
