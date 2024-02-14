import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios'; // Import axios for making HTTP requests

function Contact() {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = async () => {
        try {
            // Make a POST request to the backend API endpoint
            const response = await axios.post('http://localhost:8080/api/contact', {
                email: email,
                msg: query
            });

            // Handle success response
            console.log('Data stored successfully:', response.data);

            // Clear the form fields after successful submission
            setEmail('');
            setQuery('');
        } catch (error) {
            // Handle error
            console.error('Error storing data:', error);
        }
    };

    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Have Question In Mind?</h1>
            <h1 className="primary-heading">Let Us Help You</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="contact-form-container">
                <input type="text" placeholder="Enter your query" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <br />
            <button className="secondary-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Contact;
