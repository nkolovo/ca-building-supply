import React from "react";

import MaibecCarousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/maibec.json";

export default function Maibec() {
    return (
        <div className="maibec">
            <div className="title">
                Maibec
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">Maibec introduces their real wood and innovative engineered wood products to the construction industry, creating high standards for performance and appearance. Maibec siding also comes with moulding and shingles, to completely finish an exterior of your home or cottage. Maibec is made from spruce and white cedar shingles that are engineered to endure the Canadian climate. Their products are available in custom colours, ensuring that you will find a colour to satisfy your needs. Maibec has one of the highest customer satisfaction reviews across all siding products.</p>
                </article>
            </div>

            <div className="slideshow">
                <MaibecCarousel {...items} />
            </div>
        </div>
    )
}