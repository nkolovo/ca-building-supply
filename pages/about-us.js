import React from "react";

import BootstrapCarousel from "@/carousels/Bootstrap";

export default function AboutUs() {
    return (
        <div className="about_us">
            <div className="title">
                About Us
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">CA Building Supply started with a vision to build a long lasting relationship with builders and architects and homeowners to provide them with exceptional customer service and competitive pricing. We pride ourselves in ensuring that our customers get their material on time and through a seamless ordering process so they can have peace of mind when ordering their building supplies. CA building supply mainly focuses on supplying siding, composite decking and interior flooring. With over 25 years of experience, we are driven to continue the legacy to providing our clients with high level customer experience.</p>
                </article>

                <div className="slideshow">
                    <BootstrapCarousel />
                </div>
            </div>
        </div>
    )
}