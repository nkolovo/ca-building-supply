import React from "react";

import Carousel from "@/carousels/dynamic-carousel";
import { items } from "../../public/company/carousel/soffitfasciaandeavestrough.json";

export default function SoffitFasciaAndEavestrough() {
    return (
        <div className="soffitfasciaandeavestrough">
            <div className="title">
            Soffit Fascia and Eavestrough
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        Insert description here.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <Carousel {...items} />
            </div>
        </div>
    )
}