import React, { useState } from "react";
import Link from "next/link";

import NavItem from "./../Header/NavItem";

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
            <div className="contact-info">
                <div className='footer_contact_us_title'>
                    Contact Us
                </div>
                <div className='footer_contact_us_info_gen'>
                    <span className='footer_contact_us_info_row'>Address: Missisauga</span>
                    <span className='footer_contact_us_info_row'>Phone Number: xxx-xxx-xxxx</span>
                    <span className='footer_contact_us_info_row'>
                        Email: {' '}
                        <a href="mailto:kosta@cabuildingsupply.ca" style={{ color: 'wheat' }}><span style={{ paddingLeft: '5px' }}>kosta@cabuildingsupply.ca</span></a>
                    </span>
                </div>
            </div>
            <div className="footer_tabs">
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
                            <source media="(min-width: 30px)" srcSet='developer-logo/Kolovos WD.svg' />
                            <img className="developer-pic" src='developer-logo/Kolovos WD.svg' alt="background" />
                        </picture>
                    </a>
                </div>
            </div>
        </footer>
    )
}

{/* <i className="developer">Nikolas Kolovos Web Design</i> */ }