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
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className='nav'>
                <Link
                    href={'/'}
                    onClick={() => setActiveIdx(-1)}
                >
                    <picture className="logo">
                        <source media="(min-width: 30px)" srcSet='company/logo/svg/4.svg' />
                        <img className="logo-pic" src='company/logo/svg/4.svg' alt="background" />
                    </picture>
                </Link>

                <div
                    onClick={() => setNavActive(!navActive)}
                    className="nav__menu-bar"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                    <div onClick={() => setNavActive(!navActive)} className="nav__menu-close">
                        X
                    </div>
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