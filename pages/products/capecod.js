import React from "react";

import CapeCodCarousel from "@/carousels/capecod-carousel";
import { items } from "./../../public/company/carousel/capecodsiding.json";

export default function CapeCod() {
    return (
        <div className="capecod">
            <div className="title">
                Cape Cod
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">
                        An important artistic medium for centuries, wood is beautiful and versatile. Cape Cod offers a wide range of siding options to complement your home’s design, reflecting your lifestyle and taste. From the classic horizontal and traditional bevel to vertical board and batten or a sleek contemporary channel, Cape Cod gives you artistic rein with siding and trim profiles that will add distinctive architectural detail to your home.
                    </p>
                    <p className="info-text">
                        Cape Cod Wood Siding is sealed on all sides applying the finest finish available; PPG Machine Applied Coatings, which is a 100% acrylic, breathable water-based paint. This top-quality finish is applied under strictly controlled factory conditions ensuring that the required thickness is applied over the entire surface of the siding. This system produces a uniform finish and maximum protection that cannot be achieved with field applied paint.
                    </p>
                </article>
            </div>
            <div className="slideshow">
                <CapeCodCarousel {...items} />
            </div>
        </div>
    )
}