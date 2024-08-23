import React from "react";

import TrexCarousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/trex.json";

export default function Trex() {
    return (
        <div className="trex">
            <div className="title">
                Trex
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">The grandfather of composite wood decking, Trex is a well known household name that boasts amazing decking colours that will last for many years to come. They ensure that anyone's budget can take on composite wood through their different product lines. It is known that investing in a composite deck will save you money in the first 4 years when compared to buying a pressure treated lumber deck. Trex comes in and helps homeowners retain the value of their deck, therefore increasing the value of their home over time. Trex has five lines of decking; their Trex Enhanced Basics, Naturals, Select, Transcends and Lineage. All with a 25 year warranty, satisfaction is guaranteed when choosing a Trex decking product.</p>
                </article>
            </div>
            <div className="slideshow">
                <TrexCarousel {...items} />
            </div>
        </div>
    )
}