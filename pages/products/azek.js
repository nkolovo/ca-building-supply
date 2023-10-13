import React from "react";

import AzekCarousel from "@/carousels/azek-carousel";

export default function Azek() {
    return (
        <div className="azek">
            <div className="title">
                Azek
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">Azek Decking is a 100% PVC deck board that is the top of the line in quality, durability and finish when compared to any decking product out there. Azek is resistant to fade, molding, splitting, rotting, staining, and requires no maintenance. Due to it being pure PVC, Azek decking is lighter than composite woods. This means that carrying it and working with it is easier, putting less physical strain on the installers. Azek also retains less heat compared to other composite decking products allowing it to stay cooler and hot during summer days. If you are looking for a high end decking product with a 50 year warranty, Azek is the decking that is perfect for you.</p>
                </article>
            </div>
            <div className="slideshow">
                <AzekCarousel />
            </div>
        </div>
    )
}