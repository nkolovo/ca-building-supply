import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/zuridecking.json";

export default function ZuriDecking() {
    return (
        <div className="zuridecking">
            <div className="title">
                Zuri Decking
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Zuri is a high end decking option for homeowners who want to enjoy their deck for many years to come. It is very scratch resistant, has exceptional resistance to UV light and colour fading, and has a special extrusion finish which captures the look of exotic wood. There is a 25 year warranty on the product.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}