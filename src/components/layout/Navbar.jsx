import Link from "next/link";
import React, { useState } from "react";

import NavItem from "./NavItem";

export default function Navbar() {
    const MENU_LIST = [
        {
            text: "About Us",
            href: "/about-us"
        },
        {
            text: "Mission Statement",
            href: "/mission-statement"
        },
        {
            text: "Values",
            href: "/values"
        },
        {
            text: "Products",
            href: "/products"
        },
        {
            text: "Gallery",
            href: "/gallery"
        },
        {
            text: "FAQ",
            href: "/faq"
        },
        {
            text: "Contact Us",
            href: "/contact-us"
        },
    ]

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <header>
            <nav className='nav'>
                <Link
                    href={'/'}
                    onClick={() => setActiveIdx(-1)}
                >
                    <h1 className="logo">CA Building Supply</h1>
                </Link>

                <div onClick={() => setNavActive(!navActive)}
                    className="nav__menu-bar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${navActive ? 'active' : ''}
                    nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => {
                        return (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}>
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        );
                    })}
                </div>
            </nav>
        </header >
    )
}