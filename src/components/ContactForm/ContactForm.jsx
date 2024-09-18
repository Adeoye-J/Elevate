import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import "./contactForm.scss"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'your_service_id', // Service ID
            'your_template_id', // Template ID
            formData,
            'your_user_id' // User ID
        )
        .then((response) => {
            alert('Message sent successfully!', response.status, response.text);
        })
        .catch((err) => {
            console.error('Failed to send message. Error:', err);
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Enter Full Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='input-container'>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='input-container'>
                <label>Message:</label>
                <textarea
                    name="message"
                    placeholder='Anticipating your message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
