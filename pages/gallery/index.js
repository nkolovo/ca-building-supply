import React from "react";

import NavGallery from "@/src/components/NavGallery";

import styles from './../../styles/Gallery.module.css';

export default function Gallery() {
    const GALLERY_LIST = [
        {
            text: "Project 1",
            img: "company/gallery/30a1094e-c711-4198-baf5-f794c919472e.jpg",
            href: "/gallery/1"
        },
        {
            text: "Project 2",
            img: "company/gallery/91b39148-e2cb-461a-92a1-c199bc74d60c.jpg",
            href: "/gallery/2"
        },
        {
            text: "Project 3",
            img: "company/gallery/a7d6d9f3-fab2-466e-be3c-60994685f836.jpg",
            href: "/gallery/3"
        },
        {
            text: "Project 4",
            img: "company/gallery/IMG_2272.JPG",
            href: "/gallery/4"
        },
        {
            text: "Project 5",
            img: "company/gallery/IMG_3368.jpg",
            href: "/gallery/5"
        },
        {
            text: "Project 6",
            img: "company/gallery/IMG_8785.jpg",
            href: "/gallery/6"
        },
    ]

    return (
        <div className="header">
            <h2 className="title">Past Projects</h2>
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
        </div>
    )
}