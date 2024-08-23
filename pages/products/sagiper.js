import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/sagiper.json";

export default function Sagiper() {
    return (
        <div className="sagiper">
            <div className="title">
                Sagiper
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Sagiper is an amazing product when it comes to soffit and cladding. Their material is a fire rated high performance polymer siding (FR-HPPS) which is able to withstand the harsh Canadian winters. They have a 50 year warranty on their material, impenetrable to insects, water, mould, and it is very easy to install. Home owners will enjoy maintenance free aspects of Sagiper for many years to come.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}