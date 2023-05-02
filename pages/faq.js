export default function FAQ() {
    return (
        <div className="faq">
            <div className="title">
                FAQ
            </div>
            <div className="body">
                <article className="text-content">
                    <ul className="a">
                        <li>Do you sell to homeowners?</li>
                        <p className="faq-answer">We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply.</p>

                        <li>Do you deliver?</li>
                        <p className="faq-answer">We do deliver! Delivery charges are based on order sizes and distance traveled.</p>

                        <li>Do you take material back?</li>
                        <p className="faq-answer">For stocked items there is a restocking fee as well as a pick up fee. For custom orders, all sales are final.</p>

                        <li>What are your hours of operation?</li>
                        <div className="hours-of-operation">
                            <span className='day'>Monday:<span className="hour">8:00AM - 4:00PM</span></span>
                            <span className='day'>Tuesday:<span className="hour">8:00AM - 4:00PM</span></span>
                            <span className='day'>Wednesday:<span className="hour">8:00AM - 4:00PM</span></span>
                            <span className='day'>Thursday:<span className="hour">8:00AM - 4:00PM</span></span>
                            <span className='day'>Friday:<span className="hour">8:00AM - 4:00PM</span></span>
                            <span className='day'>Saturday:<span className="hour">Closed</span></span>
                            <span className='day'>Sunday:<span className="hour">Closed</span></span>
                        </div>

                        <li>Do you sell other building materials?</li>
                        <p className="faq-answer">We sell decking and fencing material including, but not limited to pressure treated and cedar lumber, composite decking and fencing, railing etc. Please contact our sales representatives for inquiries and a full range of products.</p>

                        <li>I need material that is not on your website. Are you able to sell that material?</li>
                        <p className="faq-answer">We are always looking to sell different products. If you need a product for a specific job, our sales representatives will be happy to provide you pricing to supply the job.</p>
                    </ul>
                </article>
            </div >
        </div >
    )
}