export default function ContactUs() {
    async function handleSubmit(e) {
        e.preventDefault();
        const submitButton = e.currentTarget.children[2];
        submitButton.disabled = true;
        const completedText = e.currentTarget.children[3];
        const errorText = e.currentTarget.children[4];
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            submitButton.disabled = false;
            completedText.style.display = "block";
            completedText.style.textAlign = "center";
        } catch (err) {
            errorText.style.display = "block";
            errorText.style.textAlign = "center";
        }
    }

    return (
        <div className="contact-us">
            <div className="title">
                Contact Us
            </div>
            <div className="body">
                <article className="contact-us-article">
                    <p className="contact-us-header">Send us your information and we'll get back to you as soon as we can!</p>
                    <form className="contact-us-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Full Name*:
                                    <input className="input" id="name" name="Name" type="text" required />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Email*:
                                    <input className="input" id="email" name="Email" type="email" autoComplete="email" required />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Company Name:
                                    <input className="input" id="companyName" name="CompanyName" type="text" />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Street Address:
                                    <input className="input" id="address" name="Address" />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">City:
                                    <input className="input" id="city" name="City" />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Province:
                                    <input className="input" id="province" name="Province" />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Postal Code:
                                    <input className="input" id="postalCode" name="PostalCode" />
                                </span>
                            </div>
                            <div className="info-entry col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <span className="entry">Phone Number*:
                                    <input className="input" id="phone" name="Phone" required />
                                </span>
                            </div>
                            <div className="info-entry col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <span className="entry">Message:
                                    <textarea className="input" id="message" name="Message" />
                                </span>
                            </div>
                        </div>
                        <div className="contact-us-requirements">
                            <span className="contact-us-requirements-span">
                                Fields marked with an asterisk (*) are required
                            </span>
                        </div>
                        <button className="btn btn-lg btn-warning submit-info" type="submit">
                            <span>Submit</span>
                        </button>
                        <div style={{ display: "none", textAlign: "center", paddingBottom: 20 }}>
                            <span style={{ fontSize: 24, color: "orangered" }}>Thanks for contacting us, we will get back to you soon!</span>
                        </div>
                        <div style={{ display: "none", textAlign: "center", paddingBottom: 20 }}>
                            <span style={{ fontSize: 24, color: "orangered" }}>There was a problem submitting the form. Please try again later</span>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    )
}