import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="space-ptb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center">
                                    <h1>Contact us</h1>
                                    <p>Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-lg-around position-relative pt-5">
                            <div className="col-lg-4 col-md-5 mb-4">
                                <div className="is-sticky" style={{top: '80px'}}>
                                    <h4 className="mb-4">Let’s talk about what you want to accomplish and how we can make it happen.</h4>
                                    <h5 className="text-light">This is the beginning of creating the life that you want to live.</h5>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 pr-lg-5">
                                <div className="p-4 p-md-5 bg-white shadow">
                                    <h3>Need assistance? please fill the form</h3>
                                    <form className="mt-4" method="POST" action="emailSend.php">
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control" id="exampleInputName" placeholder="Name" name="name" required="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="tel" className="form-control" id="exampleInputLname" placeholder="Mobile" name="mobile" required="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email Address" name="email" required="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control" id="exampleInputEnquiry" placeholder="Enquiry Type" name="enqtype" required="" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <textarea className="form-control" id="exampleInputEnquiry-Description" placeholder="Enquiry Description" name="msg" rows="5" required=""></textarea>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" required="" />
                                                <label className ="custom-control-label small" for="customCheck1">I agree to talk about my project with IMVirtualTech</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn btn-primary" name="email_send">Send Massage<i className="fas fa-arrow-right pl-3"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-bg-logo">
                                <i className="fas fa-comment"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
