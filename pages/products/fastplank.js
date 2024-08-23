import React from "react";

import FastPlankCarousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/fastplank.json";

export default function FastPlank() {
    return (
        <div className="james_hardie">
            <div className="title">
                FastPlank
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">Aluminum siding offers benefits that traditional exterior siding products cannot. Fast Plank is versatile, modern, durable, and comes with a 50 year product warranty. It is a perfect product when looking for siding and soffit. They offer a 4” and 6” V-Notch woodgrain aluminum siding system and are perfect for single, multi-family developments and commercial buildings. The product comes in 8 different colours for you to choose from, and comes in 12’ and 16’ lengths. The maintenance free aspect will hold value on the product, making your resale value of your home increase. This product is also fire rated so you can use this on multi-level developments.</p>
                </article>
            </div>

            <div className="slideshow">
                <FastPlankCarousel {...items} />
            </div>
        </div>
    )
}