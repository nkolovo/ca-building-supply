import Link from 'next/link';

export default function MissionStatement() {
    return (
        <div className="mission_statement">
            <div className="title">
                Mission Statement
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">At CA Building Supply, our mission is to provide the highest quality of customer service and customer experience in Canada. We hold ourselves to a higher standard, always striving for excellence every day.</p>
                </article>
            </div>
            <div className="services-image">
                <article className='services-article'>
                    <picture className="canada-picture">
                        <source media="(min-width: 30px)" srcSet="company/about_us/canada.jpg" />
                        <img className="canada" src="company/about_us/canada.jpg" alt="map of canada" />
                    </picture>
                    <h1 className="services-text">Providing services across Canada.</h1>
                    <Link className='contact-us-button-link' href="/contact-us">
                        <button className='contact-us-button btn btn-lg btn-warning'>Contact Us</button>
                    </Link>
                </article>
            </div>
        </div>
    )
}