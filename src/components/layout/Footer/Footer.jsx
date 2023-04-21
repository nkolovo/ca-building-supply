import React from "react"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="contact-info">
                <div className='footer_contact_us_title'>
                    Contact Us
                </div>
                <div className='footer_contact_us_info_gen'>
                    <span className='footer_contact_us_info_row'>Address: Missisauga</span>
                    <span className='footer_contact_us_info_row'>Phone Number: xxx-xxx-xxxx</span>
                    <span className='footer_contact_us_info_row'>
                        Email: {' '}
                        <a href="mailto:kosta@cabuildingsupply.ca" style={{ color: 'wheat' }}><span style={{paddingLeft:'5px'}}>kosta@cabuildingsupply.ca</span></a>
                    </span>
                </div>
                <div className="footer_company">
                    <div className="ca-logo">CA Building Supply</div>
                    <div className="developer">
                        <a
                            href='https://github.com/nkolovo?tab=projects'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className="developer">Nikolas Kolovos Web Design</i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
