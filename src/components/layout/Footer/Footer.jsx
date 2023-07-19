import React, { useState } from "react";
import Link from "next/link";

import NavItem from "./../Footer/NavItem";

export default function Footer() {
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
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <footer className='footer'>
            <div className="row">
                <div className="col-12 col-xl-2 col-lg-2">
                    <div className="contact-info">
                        <div className='footer_contact_us_title'>
                            Contact Us
                        </div>
                        <div className='footer_contact_us_info_gen'>
                            <span className='footer_contact_us_info_row' style={{ display: "inline-block" }}>Address:
                                <a href="https://www.google.com/maps/place/60+Caster+Ave,+Woodbridge,+ON+L4L+5Y9/@43.78467,-79.5578496,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2ff5ce7814e9:0xd8fd8cb8f531fd1!8m2!3d43.78467!4d-79.5578496!16s%2Fg%2F11c26kthj4?entry=ttu" style={{ color: "wheat" }}>
                                    <span style={{ paddingLeft: 5, textDecoration: 'underline' }}>
                                        60 Caster Ave Woodbridge ON L4L 5Y9
                                    </span>
                                </a>
                            </span>
                            <span className='footer_contact_us_info_row'>Phone Number: {' '}
                                <a href="tel:+4168857330" style={{ color: "wheat" }}>
                                    <span style={{ paddingLeft: 5, textDecoration: 'underline' }}>
                                        416-885-7330
                                    </span>
                                </a>
                            </span>
                            <span className='footer_contact_us_info_row'>Email:
                                <a href="mailto:info@cabuildingsupply.ca" style={{ color: 'wheat' }}>
                                    <span style={{ paddingLeft: 5, textDecoration: 'underline' }}>info@cabuildingsupply.ca</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-7 footer_tabs_parent">
                    <div className="footer_tabs">
                        {MENU_LIST.map((menu, idx) => {
                            return (
                                <div
                                    style={{
                                        display: 'inline-flex',
                                        paddingRight: 25
                                    }}
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
                </div>
                <div className="col">
                    <div className="footer_company">
                        <Link
                            href={'/'}
                            onClick={() => setActiveIdx(-1)}
                            className="footer_company-logo"
                        >
                            <picture className="ca-logo">
                                <source media="(min-width: 30px)" srcSet='company/logo/svg/4.svg' />
                                <img className="logo-pic-footer" src='company/logo/svg/4.svg' alt="background" />
                            </picture>
                        </Link>
                        <div className="developer">
                            <a
                                href='https://github.com/nkolovo?tab=projects'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <picture className="developer-logo">
                                    <source media="(min-width: 30px)" />
                                    <img className="developer-pic" src='developer-logo/Kolovos WD.svg' alt="background" />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

{/* <i className="developer">Nikolas Kolovos Web Design</i> */ }