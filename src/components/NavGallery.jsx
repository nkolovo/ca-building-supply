import Link from "next/link";
import React from "react";

import styles from './../../styles/Gallery.module.css';

export default function NavProject({ href, text, img }) {
    return (
        <Link href={href}>
            <article className={styles.article}>
                <picture className={styles.picture}>
                    <source media="(min-width: 30px)" srcSet={img} />
                    <img className={styles.pic} src={img} alt="background" />
                </picture>
                <h1 className={styles.project_name}>{text}</h1>
            </article>
        </Link>
    )
}

{/* <Image
    src="/vercel.svg"
    width={500}
    height={500}
>
</Image> */}