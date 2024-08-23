import React, { useState } from 'react';
import { Accordion, Icon } from "semantic-ui-react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        var newActiveIndex = 0;
        if (e.target.className === "dropdown icon")
            newActiveIndex = parseInt(e.target.nextSibling.parentElement.nextSibling.firstChild.id);
        else
            newActiveIndex = parseInt(e.target.nextSibling.firstChild.id);
        setActiveIndex(newActiveIndex);
        if (activeIndex === newActiveIndex)
            setActiveIndex(-1);
        else
            setActiveIndex(newActiveIndex);
    }

    return (
        <div className="faq">
            <div className="title">
                FAQ
            </div>
            <div className="body">
                <Accordion styled style={{ margin: 'auto', marginBottom: 50 }}>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={(AccordionTitleProps) => handleClick(AccordionTitleProps)}>
                        <Icon name='dropdown' />
                        Do you sell to homeowners?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p id="0">We sell to homeowners, builders, architects, developers. Anyone who needs material we are happy to supply.</p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={(e) => handleClick(e)}>
                        <i className="dropdown icon"></i>
                        Do you deliver?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p id="1">We do deliver! Delivery charges are based on order sizes and distance traveled.</p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={(e) => handleClick(e)}>
                        <i className="dropdown icon"></i>
                        Do you take material back?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p id="2">For stocked items there is a restocking fee as well as a pick up fee. For custom orders, all sales are final.</p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={(e) => handleClick(e)}>
                        <i className="dropdown icon"></i>
                        What are your hours of operation?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} style={{ textAlign: "center" }}>
                        <p id="3">Monday - 8:00AM - 4:00PM</p>
                        <p>Tuesday - 8:00AM - 4:00PM</p>
                        <p>Wednesday - 8:00AM - 4:00PM</p>
                        <p>Thursday - 8:00AM - 4:00PM</p>
                        <p>Friday - 8:00AM - 4:00PM</p>
                        <p>Saturday - Closed</p>
                        <p>Sunday - Closed</p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={(e) => handleClick(e)}>
                        <i className="dropdown icon"></i>
                        Do you sell other building materials?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <p id="4">We sell decking and fencing material including, but not limited to pressure treated and cedar lumber, composite decking and fencing, railing etc. Please contact our sales representatives for inquiries and a full range of products.</p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 5}
                        index={5}
                        onClick={(e) => handleClick(e)}>
                        <i className="dropdown icon"></i>
                        I need material that is not on your website. Are you able to sell that material?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                        <p id="5">We are always looking to sell different products. If you need a product for a specific job, our sales representatives will be happy to provide you pricing to supply the job.</p>
                    </Accordion.Content>
                </Accordion>
            </div>
        </div >
    )
}