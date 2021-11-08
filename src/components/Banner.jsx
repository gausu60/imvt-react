import React from 'react'

export default function Banner() {
    return (
        <div>
            <section className="banner">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper h-700 h-sm-500" style={{transitionDuration: '0ms', transform: 'translate3d(-1349px, 0px, 0px)'}}><div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30 swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" style={{ backgroundImage: 'url(images/banner2.jpeg)', backgroundSize: 'cover',backgroundPosition: 'center center',width: '1349px' }} data-swiper-slide-index="1">
                        <div className="swipeinner container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9 col-md-11 text-center">
                                    <h1 title="IMVirtualTech" style={{visibility: 'hidden', fontSize: '20px'}} data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">We deliver Web and Mobile App Development services to global businesses.</h1>

                                    <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#" style={{visibility: 'hidden'}}>View Our Solution<i className="fas fa-arrow-right pl-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30 swiper-slide-active" style={{backgroundImage: 'url(images/banner1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center center', width: '1349px'}} data-swiper-slide-index="0">
                            <div className="swipeinner container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-10 text-center">
                                        <h1 title="IMVirtualTech" style={{fontSize: '20px', visibility: 'visible', animationDuration: '1s', animationDelay: '0.25s'}} data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s" className="fadeInUp animated">
                                            IT SOFTWARE AND DESIGN, Your Trusted Development Partner.</h1>
                                        <h6 title="IMVirtualTech" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s" className="fadeInUp animated" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s'}}>IMVirtualTech.Com is an Information Technology Company.</h6>
                                        <a className="btn btn-dark btn-round text-white fadeInUp animated" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.75s'}}>Get Started Now<i className="fas fa-arrow-right pl-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30 swiper-slide-next swiper-slide-duplicate-prev" style={{backgroundImage: 'url(images/banner2.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center center', width: '1349px'}} data-swiper-slide-index="1">
                            <div className="swipeinner container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-11 text-center">
                                        <h1 title="IMVirtualTech" style={{visibility: 'hidden', fontSize: '20px'}} data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">We deliver Web and Mobile App Development services to global businesses.</h1>

                                        <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#" style={{visibility: 'hidden'}}>View Our Solution<i className="fas fa-arrow-right pl-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30 swiper-slide-duplicate swiper-slide-duplicate-active" style={{backgroundImage: 'url(images/banner1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center center', width: '1349px'}} data-swiper-slide-index="0">
                            <div className="swipeinner container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-10 text-center">
                                        <h1 title="IMVirtualTech" style={{visibility: 'hidden', fontSze: '20px'}} data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                                            IT SOFTWARE AND DESIGN, Your Trusted Development Partner.</h1>
                                        <h6 title="IMVirtualTech" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s" style={{visibility: 'hidden'}}>IMVirtualTech.Com is an Information Technology Company.</h6>
                                        <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#" style={{visibility: 'hidden'}}>Get Started Now<i className="fas fa-arrow-right pl-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"><i className="fas fa-arrow-left icon-btn"></i></div>
                    <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"><i className="fas fa-arrow-right icon-btn"></i></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </section>
        </div>
    )
}
