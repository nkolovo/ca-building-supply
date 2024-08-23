import React from "react";

import LPSidingCarousel from "@/carousels/lpsiding-carousel";
import { items } from "../../public/company/carousel/lpsiding.json";

export default function LPSiding() {
    return (
        <div className="lpsiding">
            <div className="title">
                LP Siding
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        LP SmartSide Trim & Siding products are treated with our proprietary SmartGuard® process. With four components of protection, the process adds strength and helps our products withstand impacts, freeze/thaw cycles, high humidity, fungal decay and termites. With 16 prefinished colors, you can add style and creativity to your home’s appearance while backed by an industry-leading 5/50-year limited warranty.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <LPSidingCarousel {...items} />
            </div>
        </div>
    )
}