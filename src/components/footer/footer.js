import React from "react"

import Image from "next/image";

import styles from './../../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_contact_us_title}>
                Contact Us
            </div>
            <div className="footer_contact_us_info">
                <span className={styles.footer_contact_us_info}>
                    Address: Missisauga
                </span>
                <span className={styles.footer_contact_us_info}>
                    Phone Number: xxx-xxx-xxxx
                </span>
                <span className={styles.footer_contact_us_info}>
                    Email: {' '}
                    <a href="mailto:kosta@cabuildingsupply.ca" style={{ color: 'wheat' }}>kosta@cabuildingsupply.ca</a>
                </span>
            </div>
            <div className={styles.footer_company}>
                <a
                    href='https://github.com/nkolovo?tab=projects'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by {' '}
                    <span>
                        <Image src="/vercel.svg" alt="vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </div>
        </footer >
    )
}