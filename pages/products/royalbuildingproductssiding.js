import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/royalbuildingproductssiding.json";

export default function RoyalBuildingProductsSiding() {
    return (
        <div className="royalbuildingproductssiding">
            <div className="title">
                Royal Building Products Siding
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Royal Building Products have a wide range of siding options for your next project. Royal manufactures Celect cellular composite, vinyl and aluminum options, which comes in vertical and horizontal options, With great warranties, you can never go wrong with choosing to use them.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}