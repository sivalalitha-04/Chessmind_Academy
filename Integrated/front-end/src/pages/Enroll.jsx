import '../styles/Enroll.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Enroll(){
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        gender: '',
        age: '',
        contact: '',
        alcontact: '',
        email: '',
          houseNo: '',
          streetName: '',
          areaName: '',
          pincode: '',
          state: '',
          country: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      // const handleAddressChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData(prevState => ({
      //     ...prevState,
      //     address: {
      //       ...prevState.address,
      //       [name]: value
      //     }
      //   }));
      // };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/enrollments', formData);
            if (response.status === 200) {
                // Handle success
                console.log('Enrollment successful');
              } else {
                // Handle error
                console.error('Enrollment successfull');
                navigate("/encourse");
            }
        } catch (error) {
            // Handle error
            console.error('Error enrolling:', error);
        }
    };
    return (
        <>
        <div className="enroll-cont">
            <div className="eimg">
            <div className="en_details">
            <h3><span>E</span>nrollment form</h3>
            <form onSubmit={handleSubmit}>
                <div className="sep-cont">
            <h4><span>P</span>ersonal Information</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" className='input_' value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" className='input_' value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fatherName">Father's Name</label>
            <input type="text" id="fatherName" name="fatherName" className='input_' value={formData.fatherName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="motherName">Mother's Name</label>
            <input type="text" id="motherName" name="motherName" className='input_' value={formData.motherName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" className='input_' value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" className='input_' value={formData.age} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="contact" name="contact"className='input_' value={formData.contact} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
            <input type="tel" id="alcontact" name="alcontact" className='input_' value={formData.alcontact} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className='input_' value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        </div>
        <div className="sep-cont">
        <h4><span>A</span>ddress Information</h4>
          <div className="form-row">
        <div className="form-group">
          <label htmlFor="houseno">House Number</label>
          <input type="text" id="houseNo" name="houseNo" className='input_' value={formData.houseNo} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label htmlFor="streetName">Street Name</label>
          <input type="text" id="streetName" name="streetName" className='input_' value={formData.streetName} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label htmlFor="areaName">Area Name</label>
          <input type="text" id="areaName" name="areaName" className='input_' value={formData.areaName} onChange={handleChange} required />
          </div>
          </div>
          <div className="form-row">
            <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="pincode" name="pincode" className='input_' value={formData.pincode} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" className='input_' value={formData.state} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" className='input_' value={formData.country} onChange={handleChange} required />
        </div>
        </div>
        </div>
        <button type="submit" className='button' style={{float:'right',marginRight:'40px',marginBottom:'30px',fontSize:'15px',width:'90px',border:'none'}}><b>Enroll</b></button>
      </form>
    </div>
            </div>
        </div>
        </>
    )
}
export default Enroll;