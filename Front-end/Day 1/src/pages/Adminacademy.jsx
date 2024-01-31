import React, { useState, useEffect } from 'react';
import Adminsidebar from './Adminsidebar';
import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-modal';
import academyData from '../data_/data.jsx';
import '../styles/Adminacademy.css';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    setAcademies(academyData);
    setFilteredAcademies(academyData); 
  }, []);

  const handleSearch = () => {
    const filtered = academies.filter(academy =>
      academy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAcademies(filtered);
  };

  const handleAddAcademy = (newAcademy) => {
    setAcademies([...academies, newAcademy]);
    setFilteredAcademies([...academies, newAcademy]);
    setShowForm(false); // Hide the form after adding academy
  };

  const handleEditAcademy = (editedAcademy) => {
    const updatedAcademies = academies.map(academy =>
      academy.id === editedAcademy.id ? editedAcademy : academy
    );
    setAcademies(updatedAcademies);
    setFilteredAcademies(updatedAcademies);
    setShowEditForm(false); // Hide the edit form after editing
  };

  const handleDeleteAcademy = (id) => {
    const updatedAcademies = academies.filter(academy => academy.id !== id);
    setAcademies(updatedAcademies);
    setFilteredAcademies(updatedAcademies);
  };

  const handleViewCourse=()=>{
    navigate('/course');
  }

  return (
    <>
      <Adminsidebar>
        <div className="adacademy_cont">
          <div className="adaca_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="adbutton" onClick={handleSearch}><SearchIcon/></button>
          </div>
          <button className="addbutton" style={{color:'black',marginLeft:'170px'}} onClick={() => setShowForm(true)}><AddCircleIcon size="large"/></button>

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
                      const newAcademy = {
                        id: academies.length + 1,
                        name: e.target.elements.name.value,
                        place: e.target.elements.place.value,
                        dur: e.target.elements.dur.value,
                        img: e.target.elements.img.value,
                        desc:e.target.elements.desc.value,
                        email:e.target.elements.email.value,
                        mobile:e.target.elements.mobile.value,
                      };
                      handleAddAcademy(newAcademy);
                    }}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Academy Name</label>
                          <input type="text" className='input_' name="name" />
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input type="text" className='input_' name="place" />  
                        </div>
                        <div className="form-group">
                          <label>Duration</label>
                          <input type="text" className='input_' name="dur" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Image URL</label>
                          <input type="text" className='input_' name="img" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className='input_' name="email" />
                        </div>
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input type="text" className='input_' name="mobile" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea name='desc' className='input_'  />
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
                const editedAcademy = {
                  id: selectedAcademy.id,
                  name: e.target.elements.name.value,
                  place: e.target.elements.place.value,
                  dur: e.target.elements.dur.value,
                  img: e.target.elements.img.value,
                  desc: e.target.elements.desc.value,
                  email: e.target.elements.email.value,
                  mobile: e.target.elements.mobile.value,
                };
                handleEditAcademy(editedAcademy);
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academy Name</label>
                    <input type="text" name="name" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.name : ''} />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="place" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.place: ''} />
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input type="text" name="dur" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.dur: ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="img" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.img: ''} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.email: ''} />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" name="mobile" className='input_'  defaultValue={selectedAcademy ? selectedAcademy.mobile: ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea name='desc' className='input_'  defaultValue={selectedAcademy ? selectedAcademy.desc: ''}></textarea>
                  </div>
                </div>
                <button type="submit" className='adbutton' style={{ padding: '10px', marginLeft: '450px' }}>Update Academy</button>
              </form>
            </div>
          </Modal>

          {/* Display filtered academies */}
          {filteredAcademies.map((item) =>
            <div className="adacademy" key={item.id}>
              <div className="adaca_img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="adaca_details">
                <div className="adaca_name">
                  <h3>{item.name}</h3>
                </div>
                <div className="adaca_det">
                  <h4>{item.place}</h4>
                  <p>{item.dur}</p>
                </div>
                <Rating name="read-only" className='adrating' value={2} readOnly size='small' />
                <button className='addbutton' onClick={handleViewCourse} style={{padding:'10px',backgroundColor:'black',color:'white',marginLeft:'90px'}}>View courses</button>
                <button className='addbutton' onClick={() => {
                  setSelectedAcademy(item);
                  setShowEditForm(true);
                }}>{<EditIcon />}</button>
                <button className='addbutton' onClick={() => handleDeleteAcademy(item.id)} >{<DeleteIcon />}</button>
              </div>
            </div>
          )}
        </div>
      </Adminsidebar>
    </>
  );
}

export default Adminacademy;


                