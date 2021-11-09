import React,{ useState } from 'react'

export default function Howwework(props) {
    const [title]  = useState(props.title);
    document.title = title;
    return (
        <div>
            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-title text-center">
                                <h2>Making a decision to do something this is the first step. We all know that nothing moves until someone makes a decision.</h2>
                                <p className="mb-4">Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal.</p>
                                <p>I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents who realize only a small percentage of their potential. We all know people who live this truth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-4 mb-sm-0">
                            <img className="img-fluid border-radius" src="images/about/10.jpg" alt="" />
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid border-radius" src="images/about/11.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title is-sticky" style={{ top: '139px' }}>
                                <h2>Smart strategy &amp; excellent performance</h2>
                                <p className="mb-4 mb-md-5">Process that guarantees high productivity and profitability for your solution.</p>
                                <a href="#" className="btn btn-light-round btn-round">Let's Start Project<i className="fas fa-arrow-right pl-3"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-info feature-info-style-08">
                                <div className="feature-info-inner">
                                    <div className="feature-info-item">
                                        <div className="feature-info-number"><span>01</span></div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Analysis</h5>
                                            <p className="mb-0">Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here. </p>
                                        </div>
                                    </div>
                                    <div className="feature-info-item">
                                        <div className="feature-info-number"><span>02</span></div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Design</h5>
                                            <p className="mb-0">That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can.</p>
                                        </div>
                                    </div>
                                    <div className="feature-info-item">
                                        <div className="feature-info-number"><span>03</span></div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Development</h5>
                                            <p className="mb-0">Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make.</p>
                                        </div>
                                    </div>
                                    <div className="feature-info-item">
                                        <div className="feature-info-number"><span>04</span></div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Testing</h5>
                                            <p className="mb-0">Engage with the idea of really being there. Step Three: Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think.</p>
                                        </div>
                                    </div>
                                    <div className="feature-info-item">
                                        <div className="feature-info-number"><span>05</span></div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Go-Live</h5>
                                            <p className="mb-0">Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
