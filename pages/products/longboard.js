import React from "react";

import LongboardCarousel from "@/carousels/longboard-carousel";

export default function Longboard() {
    return (
        <div className="longboard">
            <div className="title">
                Longboard
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">When needing a product that has a 25 year warranty, beautiful colours, 24’ continuous span, and build strong, you cannot go wrong with choosing Longboard. With an extruded aluminum siding that comes from Vancouver British Columbia, architects, developers and homeowners can feel confident in using this product. Their vast array of different siding profiles, soffit and partition beams make it very attractive to use. It comes in over 40 different finishes so you know there will always be a colour that will match your needs. It is fire rated and has all the testing to be used in commercial and highrise buildings. The beauty of Longboard is that once it is installed, you will never have to worry about it. It stands strong, does not warp, and maintains its value over time. Longboard is a top choice for builders when looking for a premium quality siding product.</p>
                </article>
            </div>
            <div className="slideshow">
                <LongboardCarousel />
            </div>
        </div>
    )
}