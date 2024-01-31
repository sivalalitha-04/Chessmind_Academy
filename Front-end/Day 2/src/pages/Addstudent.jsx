// StudentForm.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Addstudent.css'; // Import CSS file for styling

const Addstudent = ({ onSubmit, onCancel, initialValues }) => {
  const [formData, setFormData] = useState({
    id: initialValues ? initialValues.id : null,
    name: initialValues ? initialValues.name : '',
    academy: initialValues ? initialValues.academy : '',
    enrolledCourse: initialValues ? initialValues.enrolledCourse : '',
    mobileNumber: initialValues ? initialValues.mobileNumber : '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to the parent component for submission
  };

  return (
    <div className="student-form-container">
      <div className="student-form-header">
        <h2>{initialValues ? 'Edit Student' : 'Add Student'}</h2>
        <button className="close-button" onClick={onCancel}>Close</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Academy:</label>
          <input
            type="text"
            name="academy"
            value={formData.academy}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Enrolled Course:</label>
          <input
            type="text"
            name="enrolledCourse"
            value={formData.enrolledCourse}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">{initialValues ? 'Update' : 'Add'}</button>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;
