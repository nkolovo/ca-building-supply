import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/versatex.json";

export default function Versatex() {
    return (
        <div className="versatex">
            <div className="title">
                Versatex
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        High quality PVC Trim options that exceed the needs of builders, architects, fabricators and homeowners. Their products are strong, durable, lightweight, and easy to install. It is resistant to moisture, mould and insects.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}