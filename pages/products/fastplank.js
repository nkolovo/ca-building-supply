import React from "react";

import FastPlankCarousel from "@/carousels/fastplank-carousel";

export default function NewTechWood() {
    return (
        <div className="james_hardie">
            <div className="title">
                FastPlank
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text"></p>
                </article>
            </div>

            <div className="slideshow">
                <FastPlankCarousel />
            </div>
        </div>
    )
}