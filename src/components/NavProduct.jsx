import Link from "next/link";
import React from "react";

import styles from './../../styles/Products.module.css';

export default function NavItem({ href, text, img }) {
    return (
        <Link href={href} title="Click to view more information on this product">
            <article className={styles.article}>
                <picture className={styles.picture}>
                    <source media="(min-width: 30px)" srcSet={img} />
                    <img className={styles.pic} src={img} alt="background" />
                </picture>
                    <h1 className={styles.product_name}>{text}</h1>
            </article>
        </Link>
    )
}