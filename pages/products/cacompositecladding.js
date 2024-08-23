import React from "react";

import CACompositeCladdingCarousel from "@/carousels/cacompositecladding-carousel";
import { items } from "../../public/company/carousel/cacompositecladding.json";

export default function CACompositeCladding() {
    return (
        <div className="cacompositecladding">
            <div className="title">
                CA Composite Cladding
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Changing up the fluted panel game, we have our own composite cladding system that is high quality, durable, and perfect for any outdoor application. Our composite siding panels come with a 25 year warranty so homeowners know that they are getting the right value for their home. The warranty covers fade, rotting and moulding. We have engineered our material to receive a hidden clip system, so that it gives a seamless finish once installed. This product is great for those who want material that is maintenance free.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <CACompositeCladdingCarousel {...items} />
            </div>
        </div>
    )
}