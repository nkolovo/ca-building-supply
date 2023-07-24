export default function ContactUs() {
    return (
        <div className="contact-us">
            <div className="title">
                Contact Us
            </div>
            <div className="body">
                <article className="contact-us-article">
                    <p className="contact-us-header">Send us your information and we'll get back to you as soon as we can!</p>
                    <div className="row">
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Full Name*:
                                <input className="input" id="name" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Email*:
                                <input className="input" id="email" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Company Name:
                                <input className="input" id="companyName" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Street Address:
                                <input className="input" id="address" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">City:
                                <input className="input" id="city" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Province:
                                <input className="input" id="province" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Postal Code:
                                <input className="input" id="postalCode" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Work Phone:
                                <input className="input" id="workPhone" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Mobile Phone:
                                <input className="input" id="mobilePhone" />
                            </span>
                        </div>
                        <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <span className="entry">Message:
                                <textarea className="input" id="message" />
                            </span>
                        </div>
                    </div>
                    <div className="contact-us-requirements">
                        <span className="contact-us-requirements-span">
                            Fields marked with an asterisk (*) are required
                        </span>
                    </div>
                    <div className="btn btn-lg btn-warning submit-info" type="submit">
                        <span>Submit</span>
                    </div>
                </article>
            </div>
        </div>
    )
}