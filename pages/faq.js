import Accordion from "@/src/components/accordion";

export default function FAQ() {
    return (
        <div className="faq">
            <div className="title">
                FAQ
            </div>
            <div className="body">
                <div className="ui styled accordion">
                    <div className="title">
                        <i className="dropdown icon"></i>
                        Do you sell to homeowners?
                    </div>
                    <div className="content">
                        <p className="transition visible" style={{ display: "block !important" }}>
                            We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply.
                        </p>
                    </div>
                </div>
                {/* <article className="text-content">
                    <ul className="a">
                        <Accordion title="Do you sell to homeowners?" content="We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply." />
                        <Accordion title="Do you deliver?" content="We do deliver! Delivery charges are based on order sizes and distance traveled." />
                        <Accordion title="Do you take material back?" content="For stocked items there is a restocking fee as well as a pick up fee. For custom orders, all sales are final." />
                        <Accordion title="What are your hours of operation?" content="We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply." />
                        <Accordion title="Do you sell other building materials?" content="We sell decking and fencing material including, but not limited to pressure treated and cedar lumber, composite decking and fencing, railing etc. Please contact our sales representatives for inquiries and a full range of products." />
                        <Accordion title="I need material that is not on your website. Are you able to sell that material?" content="We are always looking to sell different products. If you need a product for a specific job, our sales representatives will be happy to provide you pricing to supply the job." />
                    </ul>
                </article> */}
            </div >
        </div >
    )
}