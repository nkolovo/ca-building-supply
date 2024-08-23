import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/clicklad.json";

export default function ReadyPine() {
    return (
        <div className="clicklad">
            <div className="title">
                Clicklad
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                    A new game changer in the aluminum market, Clicklad is a perfect choice for your next home project. Home owners will have the opportunity to choose a fluted look or a flat shiplap look for their homes. The extruded aluminum is thick which gives it it’s strong rigidity. There are also many profiles to choose from, and you can mix and match for your home.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}