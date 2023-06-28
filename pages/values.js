import Link from "next/link"

export default function Values() {
    return (
        <div className="values">
            <div className="title">
                Values
            </div>
            <div className="body">
                <article className="text-content">
                    <div className="info-text">
                        CA Building Supply is a company founded on core values that set us apart from the competition. We believe in transparency, relationship building with clients, fair livable wages, and safety for our employees. We strive to show our values in our actions in the way we conduct business every day.
                    </div>
                </article>
                <div className="services-image">
                    <article className='services-article'>
                        <picture className="canada-picture">
                            <source media="(min-width: 30px)" srcSet="company/about_us/canada.jpg" />
                            <img className="canada" src="company/about_us/canada.jpg" alt="map of canada" />
                        </picture>
                        <h1 className="services-text">Providing services across Canada.</h1>
                        <Link className='contact-us-button-link' href="/contact-us">
                            <button className='contact-us-button btn btn-md btn-warning'>Contact Us</button>
                        </Link>
                    </article>
                </div>

            </div>
        </div>
    )
}