export default function ContactUs() {
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
            console.log(err);
            alert("We can't submit the form, please try again later.");
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
                    </form>
                </article>
            </div>
        </div>
    )
}