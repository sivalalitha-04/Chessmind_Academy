import React, { useState, useEffect } from 'react';
import Adminsidebar from './Adminsidebar';
import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-modal';
import axios from 'axios';
import academyData from '../data_/data.jsx';
import '../styles/Adminacademy.css';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

function Adminacademy() {
  const [academies, setAcademies] = useState([]);
  const [filteredAcademies, setFilteredAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState(null); // State to hold the selected academy for editing
  const navigate=useNavigate();

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/academies');
        setAcademies(response.data);
        setFilteredAcademies(response.data);
      } catch (error) {
        console.error('Error fetching academies:', error);
      }
    };

    fetchAcademies();
  }, []);

  const handleSearch = () => {
    const filtered = academies.filter(academy =>
      academy.academyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAcademies(filtered);
  };

  const handleAddAcademy = async (newAcademy) => {
    try {
      const response = await axios.post('http://localhost:8080/api/academies', newAcademy);
      setAcademies([...academies, response.data]);
      setFilteredAcademies([...academies, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding academy:', error);
    }
  };

  const handleEditAcademy = async (editedAcademy) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/academies/${editedAcademy.academyId}`, editedAcademy);
      const updatedAcademy = response.data;
      const updatedAcademies = academies.map(academy =>
        academy.academyId === updatedAcademy.academyId ? updatedAcademy : academy
      );
      setAcademies(updatedAcademies);
      setFilteredAcademies(updatedAcademies);
      setShowEditForm(false);
    } catch (error) {
      console.error('Error updating academy:', error);
    }
  };

  const handleDeleteAcademy = (id) => {
    try {
      axios.delete(`http://localhost:8080/api/academies/${id}`);
      const updatedAcademies = academies.filter(academy => academy.academyId !== id);
      setAcademies(updatedAcademies);
      setFilteredAcademies(updatedAcademies);
    } catch (error) {
      console.error('Error deleting academy:', error);
    }
  };

  const handleViewCourse = (academyId) => {
    navigate(`/admin/course/${academyId}`);
  }
  return (
    <>
      <Adminsidebar>
        <div className="adacademy_cont">
          <div className="adaca_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="adbutton" onClick={handleSearch}><SearchIcon /></button>
          </div>
          <span>
            <button className="addbutton" style={{ color: 'black', marginLeft: '120px' }} onClick={() => setShowForm(true)}>
              <AddCircleIcon size="large" />Add Academy
            </button>
          </span>
          <Modal
            isOpen={showForm}
            onRequestClose={() => setShowForm(false)}
            contentLabel="Add Academy Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
                  <div className="add-academy-form">
                    <h3><span>A</span>dd Academy</h3>
                    <button onClick={() => setShowForm(false)} style={{marginLeft:'550px',backgroundColor:'transparent',border:'none'}}>{<CloseIcon/>}</button>
                    <div className="underline" style={{backgroundColor:"black"}}></div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const newAcademy = {
                          academyId: academies.length + 1,
                          academyName: formData.get('academyName'),
                          location: formData.get('location'),
                          img: formData.get('img'),
                          academyDesc: formData.get('academyDesc'),
                          contact: formData.get('contact'),
                          email: formData.get('email'),
                          rating: formData.get('rating'),
                        };
                        handleAddAcademy(newAcademy);
                      }}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Academy Name</label>
                          <input type="text" className='input_' name="academyName" />
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input type="text" className='input_' name="location" />  
                        </div>
                        <div className="form-group">
                          <label>Image URL</label>
                          <input type="text" className='input_' name="img" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className='input_' name="email" />
                        </div>
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input type="text" className='input_' name="contact" />
                        </div>
                        <div className="form-group">
                          <label>Rating</label>
                          <input type="text" className='input_' name="rating" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea name='academyDesc' className='input_' />
                        </div>
                      </div>
                      <button type="submit" className='adbutton' style={{padding:'10px',marginLeft:'450px'}}>Add Academy</button>
                    </form>
                  </div>
                </Modal>
          

          {/* Edit Academy Modal */}
          <Modal
            isOpen={showEditForm}
            onRequestClose={() => setShowEditForm(false)}
            contentLabel="Edit Academy Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="add-academy-form">
              <h3><span>E</span>dit Academy</h3>
              <button onClick={() => setShowEditForm(false)} style={{ marginLeft: '550px', backgroundColor: 'transparent', border: 'none' }}>{<CloseIcon />}</button>
              <div className="underline" style={{ backgroundColor: "black" }}></div>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const editAcademy = {
                          academyId: selectedAcademy.academyId,
                          academyName: formData.get('academyName'),
                          location: formData.get('location'),
                          img: formData.get('img'),
                          academyDesc: formData.get('academyDesc'),
                          contact: formData.get('contact'),
                          email: formData.get('email'),
                          rating: formData.get('rating'),
                        };
                        handleEditAcademy(editAcademy);
                      }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academy Name</label>
                    <input type="text" name="academyName" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.academyName : ''} />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.location: ''} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.email: ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="img" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.img: ''} />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" name="contact" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.contact: ''} />
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <input type="text" name="rating" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.rating: ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea name='academyDesc' className='input_'  defaultValue={selectedAcademy ? selectedAcademy.academyDesc: ''}></textarea>
                  </div>
                </div>
                <button type="submit" className='adbutton' style={{ padding: '10px', marginLeft: '450px' }}>Update Academy</button>
              </form>
            </div>
          </Modal>

          {
          filteredAcademies.length === 0 ? (
            <div className="no-academy-message">
              <h3>No academy found</h3>
            </div>
          ) : (filteredAcademies.map((item) =>
            <div className="adacademy" key={item.academyId}>
              <div className="adaca_img">
                <img src={item.img} alt={item.academyName} />
              </div>
              <div className="adaca_details">
                <div className="adaca_name">
                  <h3>{item.academyName}</h3>
                </div>
                <div className="adaca_det">
                  <h4>{item.location}</h4>
                </div>
                <div className="academy-description">
                  <p>{item.academyDesc}</p>
                </div>
                <Rating className="astar-rating" value={parseFloat(item.rating)} readOnly precision={0.5} /><br />
                {/* <button className='addbutton' onClick={() => handleViewCourse(item.academyId)} style={{ padding: '10px', backgroundColor: 'black', color: 'white', marginLeft: '90px' }}>View courses</button> */}
                <Link to={`/admin/courses/${item.academyId}`} className="addbutton" style={{ padding: '13px', backgroundColor: 'black', color: 'white',marginBottom:"16px",textDecoration:"none" }}>View courses</Link>
                <button className='addbutton' onClick={() => handleDeleteAcademy(item.academyId)} >{<DeleteIcon />}</button>
                <button className='addbutton' onClick={() => {
                  setSelectedAcademy(item);
                  setShowEditForm(true);
                }}>{<EditIcon />}</button>
              </div>
            </div>
          ))}
        </div>
      </Adminsidebar>
    </>
  );
}

export default Adminacademy;
