import React from "react";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="contact-info">
                <div className='footer_contact_us_title'>
                    Contact Us
                </div>
                <div className='footer_contact_us_info_gen'>
                    <span className='footer_contact_us_info_row'>Address:
                        <a href="https://www.google.com/maps/place/60+Caster+Ave,+Woodbridge,+ON+L4L+5Y9/@43.78467,-79.5578496,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2ff5ce7814e9:0xd8fd8cb8f531fd1!8m2!3d43.78467!4d-79.5578496!16s%2Fg%2F11c26kthj4?entry=ttu" style={{ color: "wheat", alignSelf: "end" }}>
                            <span className="footer_contact_us_links">
                                60 Caster Ave Woodbridge ON L4L 5Y9
                            </span>
                        </a>
                    </span>
                    <span className='footer_contact_us_info_row'>Phone Number: {' '}
                        <a href="tel:+4168857330" style={{ color: "wheat", alignSelf: "end" }}>
                            <span className="footer_contact_us_links">
                                416-885-7330
                            </span>
                        </a>
                    </span>
                    <span className='footer_contact_us_info_row'>Email:
                        <a href="mailto:info@cabuildingsupply.ca" style={{ color: 'wheat', alignSelf: "end" }}>
                            <span className="footer_contact_us_links">
                                info@cabuildingsupply.ca
                            </span>
                        </a>
                    </span>
                </div>
            </div>
            <div className="footer_company">
                <div className="footer_company-logo">
                    <picture className="ca-logo">
                        <source media="(min-width: 30px)" srcSet='company/logo/thumbnail_CAB_Logo_Horiz_RGB.jpg' />
                        <img className="logo-pic-footer" src='company/logo/thumbnail_CAB_Logo_Horiz_RGB.jpg' alt="company-logo" />
                    </picture>
                </div>
            </div>
            {/* <div className="footer_developer">
                <a
                    href='https://github.com/nkolovo?tab=projects'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <picture className="developer-logo">
                        <source media="(min-width: 30px)" />
                        <img className="developer-pic" src='developer-logo/Kolovos WD.svg' alt="developer-logo" />
                    </picture>
                </a>
            </div> */}
        </footer >
    )
}