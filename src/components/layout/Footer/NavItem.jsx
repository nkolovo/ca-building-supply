import Link from "next/link";
import React from "react";

export default function NavItem({ href, text, active }) {
    return (
        <Link href={href}>
            <span className={`nav__link_footer ${active ? 'active' : ''}`}>
                {text}
            </span>
        </Link>
    )
}