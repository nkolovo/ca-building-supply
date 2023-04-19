import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavItem({ href, text }) {
    return (
        <Link href={href}>
            <Image
                src="/vercel.svg"
                width={300}
                height={300}
            >
            </Image>
            <p style={{textAlign:'center', color:'black'}}>{text}</p>
        </Link>
    )
}