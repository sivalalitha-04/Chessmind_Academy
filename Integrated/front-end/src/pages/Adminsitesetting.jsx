import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Adminsitesetting.css'; // Import CSS file
import Adminsidebar from './Adminsidebar';

const Adminsitesetting = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('9876543210'); // Initial phone number
    const [email, setEmail] = useState('lalli@gmail.com'); // Initial email

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Update phone number and email with the form values
        // For demonstration, we're just logging the values
        console.log("New Phone Number:", phoneNumber);
        console.log("New Email:", email);
        closeModal(); // Close the modal after saving
    };

    return (
        <>
        <Adminsidebar>
        <div className="admin-site-settings">
            <div className="contact-cont">
            <div className="eimg">
            <div className="cont_details">
            <h3>Contact Info Settings</h3>
            <p>Phone number:{phoneNumber}</p>
            <p>Email: {email}</p>
            <button onClick={openModal} style={{padding:'10px',marginLeft:'480px',marginBottom:'30px'}}className="adbutton">Edit</button>
            </div>
            </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Contact Info"
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal-content">
                    <h3>Edit Contact Info</h3>
                    <form onSubmit={handleSave}>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" style={{padding:'10px'}} className="adbutton">Save</button>
                        <button onClick={closeModal} style={{padding:'10px'}} className="adbutton">Cancel</button>
                    </form>
                </div>
            </Modal>
        </div>
        </Adminsidebar>
        </>
    );
};

export default Adminsitesetting;
