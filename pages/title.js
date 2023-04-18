import React from "react"
import Link from "next/link";

import styles from './../styles/Header.module.css';

export default function Title() {
    return (
        <Link className={styles.company} href="/">CA Building Supply</Link>
    )
}