import React from "react";

import ReadyPineCarousel from "@/carousels/readypine-carousel";
import { items } from "../../public/company/carousel/readypine.json";

export default function ReadyPine() {
    return (
        <div className="readypine">
            <div className="title">
                Ready Pine
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                    100% real pine, Ready Pine is pre-finished panels that are maintenance free and easy to install. They have a V-match profile and a shiplap (nickel gap) profile that are ready available. Ready Pine is a perfect option for your soffit or interior ceiling. With 12 different colours to choose from, they are a great option for your house.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <ReadyPineCarousel {...items} />
            </div>
        </div>
    )
}