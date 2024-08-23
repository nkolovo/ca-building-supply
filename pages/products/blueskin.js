import React from "react";

import BlueskinCarousel from "@/carousels/blueskin-carousel";
import { items } from "../../public/company/carousel/blueskin.json";

export default function Blueskin() {
    return (
        <div className="blueskin">
            <div className="title">
                BlueSkin
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Blueskin SA is a self-adhering membrane consisting of an SBS rubberized asphalt compound laminated on a blue polyethylene film. It is impermeable to air, moisture vapor and water. Get Blueskin today to protect your projects.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <BlueskinCarousel {...items} />
            </div>
        </div>
    )
}