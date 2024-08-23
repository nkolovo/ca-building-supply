import React from "react";

import TyvekCarousel from "@/carousels/tyvek-carousel";
import { items } from "./../../public/company/carousel/tyvek.json";

export default function Tyvek() {
    return (
        <div className="tyvek">
            <div className="title">
                Tyvek
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Tyvek is a homewrap that envelops your surface to protect your framing from moisture and the elements. It allows water vapor to permeate the material while preventing water and other liquids from entering. Tyvek is also recyclable so it is safe to use for the environment.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <TyvekCarousel {...items} />
            </div>
        </div>
    )
}