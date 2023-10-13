import React from "react";

import FraserWoodCarousel from "@/carousels/fraserwood-carousel";

export default function FraserWood() {
    return (
        <div className="fraserwood">
            <div className="title">
                Fraser Wood
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">Fraser Wood is a premium wood stained product that delivers exceptional quality and beauty, and is completed with a 50 year warranty against wood decay. Fraser Wood gets their wood from 100% PEFC certified forests in British Columbia. The high quality wood is manufactured with precision, giving you a strong and stable product to withstand the weather in Canada. Fraser Wood is a favourite among Canadians as all of its manufacturing happens in Canada. On top of using high quality materials for their manufacturing, Fraser Wood also has their own proprietary grading system. This ensures maximum board length, grain pattern, finished texture and moisture content are all maintained to Fraser Wood Siding’s exact standards.</p>
                </article>
            </div>
            <div className="slideshow">
                <FraserWoodCarousel />
            </div>
        </div>
    )
}