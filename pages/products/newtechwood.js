import React from "react";

import NewTechWoodCarousel from "@/carousels/newtechwood-carousel";

export default function NewTechWood() {
    return (
        <div className="new_tech_wood">
            <div className="title">
                NewTechWood
            </div>
            <div className="body">
                <article className="text-content">
                    <p className="info-text">NewTechWood siding brings a new, modern look to wood siding products. Made from recycled wood fibres mixed with thermoplastic resin, it is durable, maintenance free and eco-friendly. The boards have been engineered to create a seamless finish with their patented hidden clip system. NewTechWood ranges from a variety of colours, from their rich Brazilian IPE colour, to the Roman Antique grey. The very popular wall cladding profiles are the modern Norwegian and Belgium Cladding Castellation designs. The shape of these boards are unique and cannot be found anywhere else on the Canadian market. Clients will enjoy a 25 year warranty on their NewTechWood products.</p>
                </article>
            </div>
            <div className="slideshow">
                <NewTechWoodCarousel />
            </div>
        </div>
    )
}