import React from 'react'
import "./contact.scss"
import ContactForm from '../../components/ContactForm/ContactForm'
import SidePanel from '../../components/BlogItemDetails/SidePanel/SidePanel'
import HeroTemplate from '../../components/HeroTemplate/HeroTemplate'
import contactUsBackground from "/images/background/contactus-background.png"

const Contact = () => {

    return (
        <>
            <HeroTemplate hero_background={contactUsBackground} hero_description={"We're Here to Help and Listen"} hero_title={"Get in Touch with Us"} />
            <div className='contact-container'>
                <div className="contact-details">
                    <h1>Contact Me</h1>
                    <ContactForm />
                </div>
                <div className="side-container">
                    <SidePanel latest_slice={2} popular_slice={2} />
                </div>
            </div>
        </>
    )
}

export default Contact