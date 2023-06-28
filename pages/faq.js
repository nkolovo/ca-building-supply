import Accordion from "@/src/components/accordion";

export default function FAQ() {
    return (
        <div className="faq">
            <div className="title">
                FAQ
            </div>
            <div className="body">
                <article className="text-content">
                    <ul className="a">
                        <Accordion title="Do you sell to homeowners?" content="We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply." />
                        <Accordion title="Do you deliver?" content="We do deliver! Delivery charges are based on order sizes and distance traveled." />
                        <Accordion title="Do you take material back?" content="For stocked items there is a restocking fee as well as a pick up fee. For custom orders, all sales are final." />
                        <Accordion title="What are your hours of operation?" content="We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply." />
                        <Accordion title="Do you sell other building materials?" content="We sell decking and fencing material including, but not limited to pressure treated and cedar lumber, composite decking and fencing, railing etc. Please contact our sales representatives for inquiries and a full range of products." />
                        <Accordion title="I need material that is not on your website. Are you able to sell that material?" content="We are always looking to sell different products. If you need a product for a specific job, our sales representatives will be happy to provide you pricing to supply the job." />
                        {/* <div class="accordion" id="faq">
                            <div class="card">
                                <div class="card-header" id="headingOne" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#first" aria-expanded="true" aria-controls="first" style={{ width: '100%', textAlign: 'left' }}>
                                            Do you sell to homeowners?
                                        </button>
                                    </h5>
                                </div>

                                <div id="first" class="collapse" aria-labelledby="headingOne" data-bs-parent="#faq">
                                    <div class="card-body">
                                        We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply.
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#second" aria-expanded="true" aria-controls="second" style={{ width: '100%', textAlign: 'left' }}>
                                            Do you deliver?
                                        </button>
                                    </h5>
                                </div>
                                <div id="second" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#faq">
                                    <div class="card-body">We do deliver! Delivery charges are based on order sizes and distance traveled.</div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingThree" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#third" aria-expanded="true" aria-controls="third" style={{ width: '100%', textAlign: 'left' }}>
                                            Do you take material back?
                                        </button>
                                    </h5>
                                </div>
                                <div id="third" class="collapse" aria-labelledby="headingThree" data-bs-parent="#faq">
                                    <div class="card-body">For stocked items there is a restocking fee as well as a pick up fee. For custom orders, all sales are final.</div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingFour" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#fourth" aria-expanded="true" aria-controls="fourth" style={{ width: '100%', textAlign: 'left' }}>
                                            What are your hours of operation?
                                        </button>
                                    </h5>
                                </div>
                                <div id="fourth" class="collapse" aria-labelledby="headingFour" data-bs-parent="#faq">
                                    <div class="card-body">
                                        <span className='day'>Monday:<span className="hour">8:00AM - 4:00PM</span></span>
                                        <span className='day'>Tuesday:<span className="hour">8:00AM - 4:00PM</span></span>
                                        <span className='day'>Wednesday:<span className="hour">8:00AM - 4:00PM</span></span>
                                        <span className='day'>Thursday:<span className="hour">8:00AM - 4:00PM</span></span>
                                        <span className='day'>Friday:<span className="hour">8:00AM - 4:00PM</span></span>
                                        <span className='day'>Saturday:<span className="hour">Closed</span></span>
                                        <span className='day'>Sunday:<span className="hour">Closed</span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingFive" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#fifth" aria-expanded="true" aria-controls="fifth" style={{ width: '100%', textAlign: 'left' }}>
                                            Do you sell other building materials?
                                        </button>
                                    </h5>
                                </div>
                                <div id="fifth" class="collapse" aria-labelledby="headingFive" data-bs-parent="#faq">
                                    <div class="card-body">We sell decking and fencing material including, but not limited to pressure treated and cedar lumber, composite decking and fencing, railing etc. Please contact our sales representatives for inquiries and a full range of products.</div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingSix" style={{ backgroundColor: '#212529' }}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#sixth" aria-expanded="true" aria-controls="sixth" style={{ width: '100%', textAlign: 'left' }}>
                                            I need material that is not on your website. Are you able to sell that material?
                                        </button>
                                    </h5>
                                </div>
                                <div id="sixth" class="collapse" aria-labelledby="headingSix" data-bs-parent="#faq">
                                    <div class="card-body">We are always looking to sell different products. If you need a product for a specific job, our sales representatives will be happy to provide you pricing to supply the job.</div>
                                </div>
                            </div>
                        </div> */}
                    </ul>
                </article>
            </div >
        </div >
    )
}