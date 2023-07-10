import Link from "next/link";
import React from "react";

import styles from './../../styles/Products.module.css';

export default function NavItem({ href, img, text }) {
    return (
        <article className={styles.article}>
            <Link href={href} title="Click to view more information on this product">
                <picture className={styles.picture}>
                    <source media="(min-width: 30px)" srcSet={img} />
                    <img className={styles.pic} src={img} alt="product background" />
                </picture>
                <h1 className={styles.product_name}>{text}</h1>
            </Link>
        </article>
    )
}