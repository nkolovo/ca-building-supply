import Link from "next/link";

import styles from "./../styles/Header.module.css";

export default function Tabs() {
    return (
        <div className={styles.tabs}>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/about-us">About Us</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/mission-statement">Mission Statement</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/values">Values</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/products">Products</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/gallery">Gallery</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/faq">FAQ</Link>
            </div>
            <div className={styles.link} style={{ 'marginRight': 5 }}>
                <Link className={styles.links} href="/contact-us">Contact Us</Link>
            </div>
        </div>
    )
}