import React from "react";

import JamesHardieCarousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/jameshardie.json";

export default function JamesHardie() {
    return (
        <div className="james_hardie">
            <div className="title">
                James Hardie
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">James Hardie Fiber Cement board boasts qualities such as a wide range of colours, longevity and amazing wood looking finishes. This material goes well with brick, stone, and stucco. Clients will also choose James Hardie for its higher durability compared to other siding products, as well as its amazing weather resistance (especially in the Canadian climate). Due to the composition of material, it carries a 30 year warranty, protecting it from rot, splitting and insects. The material is also one of the thickest that the market has to offer. It comes 5x thicker than vinyl, so as a homeowner, you know your product will last longer. Due to its resilience, James Hardie siding will not age like other siding material, and it will improve your home's overall resale value.</p>
                </article>
            </div>

            <div className="slideshow">
                <JamesHardieCarousel {...items} />
            </div>
        </div>
    )
}