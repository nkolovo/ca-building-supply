import React from "react";

import TimberTechCarousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/timbertech.json";

export default function Blueskin() {
    return (
        <div className="timbertech">
            <div className="title">
                TimberTech
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                    Timbertech is a composite decking material that is durable, and maintenance free and provides home owners with a high end finished deck. Timbertech is resistant to fade, splitting and rotting. Home owners have the option to go with the hidden fastener system or face screws with plugs. There are over 20 finish options across nine timbertech collections, so you are guaranteed to find a colour and finish that suits your style. Warranties for Timbertech range from 25 years to lifetime.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <TimberTechCarousel {...items} />
            </div>
        </div>
    )
}