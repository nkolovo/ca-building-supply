export default function ContactUs() {
    return (
        <div className="contact-us">
            <div className="title">
                Contact Us
            </div>
            <div className="body">
                <article>
                    <div className="info-entry">
                        <span>Full Name*
                            <input id="name" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Email*
                            <input id="email" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Company Name
                            <input id="companyName" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Street Address
                            <input id="address" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>City
                            <input id="city" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Province
                            <input id="province" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Postal Code
                            <input id="postalCode" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Work Phone
                            <input id="workPhone" />
                        </span>
                    </div>
                    <div className="info-entry">
                        <span>Mobile Phone
                            <input id="mobilePhone" />
                        </span>
                    </div>
                    <div className="message">
                        <span>Message
                            <input id="message" />
                        </span>
                    </div>
                </article>
            </div>
        </div>
    )
}