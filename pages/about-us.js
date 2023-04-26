import React from "react";

import BootstrapCarousel from "@/carousels/Bootstrap";

export default function AboutUs() {
    return (
        <div className="about_us">
            <div className="title">
                <h2 style={{ textAlign: "center", fontWeight: 600, marginBottom: 0 }}>
                    About Us
                </h2>
            </div>
            <div className="body">
                <article className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ac auctor convallis. Vivamus lorem dolor, volutpat quis ultrices nec, finibus interdum felis. Ut porttitor mollis dolor a auctor. Phasellus imperdiet blandit justo, et fermentum enim finibus eget. Maecenas nec faucibus lorem. Nam non neque at dui feugiat euismod. Maecenas luctus metus eget scelerisque porta. Donec eu tellus nulla. Nullam neque turpis, malesuada eget mollis non, sollicitudin interdum metus. Ut eleifend felis in metus semper mollis. Nunc facilisis dui erat, sit amet aliquam felis maximus id. Donec semper pretium enim, et fringilla turpis posuere eu. Donec at nulla eros. Praesent eget augue et justo posuere porta et vitae risus. Donec non volutpat tellus.</p>
                    <p>Vivamus at elit ut mi posuere molestie. Integer in purus at urna elementum malesuada sit amet quis ante. In lectus elit, dictum eu tempus id, pharetra nec massa. Mauris fringilla eget metus non mollis. Suspendisse ac justo quis erat cursus imperdiet. Mauris vitae erat at massa blandit dictum. Sed suscipit sollicitudin ligula. Pellentesque diam augue, tincidunt ut dui vel, dictum faucibus leo. Nunc eu facilisis libero, eu efficitur augue. Ut a mattis mi. Nullam sed ligula sed velit malesuada posuere et porta odio. Suspendisse vel sapien hendrerit mauris vestibulum mattis ut vel mauris.</p>
                    <p>Duis venenatis mi tortor, et ultrices odio cursus non. Nullam consequat elit vel mollis vehicula. Mauris vitae nisi diam. Pellentesque maximus neque id odio mollis maximus. Quisque sit amet ultricies ipsum, sit amet maximus risus. Nam quis ipsum elit. Sed aliquet ut urna eu semper. Fusce pharetra vestibulum lacus non blandit. Proin et tempus urna, interdum fermentum nisl.</p>
                    <p>Sed aliquam, nunc id fermentum euismod, enim nisi fermentum diam, sit amet sodales orci mi non lacus. Nunc vulputate sollicitudin nunc, ut rhoncus ex dignissim eget. Etiam felis risus, congue non suscipit in, congue vitae orci. Sed cursus auctor dui, et placerat arcu sagittis sed. Mauris vulputate vel dolor tempor lobortis. Nullam suscipit, felis at eleifend elementum, orci risus condimentum tellus, sit amet convallis tellus leo at est. Aliquam at sapien ultricies, ullamcorper ante ac, luctus leo. Mauris condimentum nisi id dignissim blandit. Phasellus dignissim, felis non convallis imperdiet, massa sem ultricies ex, sit amet euismod velit purus vulputate nisl. Etiam tincidunt, turpis nec interdum iaculis, lorem est ultricies augue, egestas dictum purus urna eu ipsum. Nulla facilisi. In sit amet dignissim libero. Nullam pellentesque blandit metus a scelerisque. Etiam placerat metus ante, ac feugiat sapien consectetur sit amet.</p>
                    <p>Vestibulum arcu felis, consectetur vitae risus sed, suscipit convallis massa. Sed consequat neque id nisi laoreet finibus. Fusce viverra lacinia metus, non dictum est sodales quis. Fusce et varius enim. Pellentesque ultricies, nisi in semper placerat, lectus metus varius ante, ac commodo purus metus non lorem. Aliquam luctus diam ut iaculis interdum. Donec hendrerit eget magna sit amet placerat. Phasellus eu eros auctor, tincidunt leo sit amet, accumsan nulla. Suspendisse faucibus nunc nec interdum ultricies. In eu orci odio. Curabitur rhoncus cursus dolor sit amet laoreet. Integer in lorem quam. Aliquam lobortis orci ut ex condimentum feugiat. Ut risus turpis, maximus sit amet mi placerat, molestie tincidunt odio. Etiam consequat erat vitae vehicula dapibus.</p>
                </article>

                <div className="slideshow">
                    <BootstrapCarousel />
                </div>
            </div>
        </div>
    )
}