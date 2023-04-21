import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavGallery from "@/src/components/NavGallery";

import styles from './../../styles/Gallery.module.css';

export default function Gallery() {
    const GALLERY_LIST = [
        {
            text: "Example 1",
            img: "company/projects/example.jpg",
            href: "/gallery/example-1"
        },
        {
            text: "Example 2",
            img: "company/projects/example.jpg",
            href: "/gallery/example-2"
        },
        {
            text: "Example 3",
            img: "company/projects/example.jpg",
            href: "/gallery/example-3"
        },
        {
            text: "Example 4",
            img: "company/projects/example.jpg",
            href: "/gallery/example-4"
        },
        {
            text: "Example 5",
            img: "company/projects/example.jpg",
            href: "/gallery/example-5"
        },
        {
            text: "Example 6",
            img: "company/projects/example.jpg",
            href: "/gallery/example-6"
        },
        {
            text: "Example 7",
            img: "company/projects/example.jpg",
            href: "/gallery/example-7"
        },
    ]

    return (
        <div className={styles.gallery}>
            <div className={styles.projects}>
                {GALLERY_LIST.map((project) => {
                    return (
                        <div className={styles.project}
                            key={project.text}>
                            <NavGallery {...project} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}