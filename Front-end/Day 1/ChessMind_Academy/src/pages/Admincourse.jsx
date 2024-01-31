import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-modal';
import encourse from '../data_/acoursedata.jsx'; 
import Adminsidebar from './Adminsidebar.jsx';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../styles/Admincourse.css';

Modal.setAppElement('#root');

function Admincourse() {
  const [course, setCourse] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    setCourse(encourse);
    setFilteredCourse(encourse); 
  }, []);

  const handleSearch = () => {
    const filtered = course.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourse(filtered);
  };

  const handleAddCourse = (newCourse) => {
    setCourse([...course, newCourse]);
    setFilteredCourse([...course, newCourse]);
    setShowForm(false);
  };

  const handleEditCourse = (editedCourse) => {
    const updatedCourses = course.map(c =>
      c.id === editedCourse.id ? editedCourse : c
    );
    setCourse(updatedCourses);
    setFilteredCourse(updatedCourses);
    setShowEditForm(false);
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = course.filter(c => c.id !== id);
    setCourse(updatedCourses);
    setFilteredCourse(updatedCourses);
  };

  return (
    <>
      <Adminsidebar>
        <div className="adcourse_cont">
          <div className="adcourse_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="adbutton" onClick={handleSearch}>{<SearchIcon/>}</button>
          </div>
          <button className="addbutton" onClick={() => setShowForm(true)}><AddCircleIcon size="large"/></button>

          <Modal
            isOpen={showForm}
            onRequestClose={() => setShowForm(false)}
            contentLabel="Add Course Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="add-course-form">
              <h3>Add Course</h3>
              <button onClick={() => setShowForm(false)} style={{marginLeft:'550px',backgroundColor:'transparent',border:'none'}}>{<CloseIcon/>}</button>
              <div className="underline" style={{backgroundColor:"black"}}></div>
              <form onSubmit={(e) => {
                e.preventDefault();
                const newCourse = {
                  id: course.length + 1,
                  acaname: e.target.elements.acaname.value,
                  name: e.target.elements.name.value,
                  time: e.target.elements.time.value,
                  ns: e.target.elements.ns.value,
                  dur: e.target.elements.dur.value,
                  desc:e.target.elements.desc.value
                };
                handleAddCourse(newCourse);
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academy Name</label>
                    <input type="text" className='input_'  name="acaname" />
                  </div>
                  <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" className='input_'  name="name" />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="text" className='input_'  name="time" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>No. of Students</label>
                    <input type="number" className='input_'  name="ns" />
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input type="text" className='input_'  name="dur" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea name='desc' className='input_' />
                  </div>
                </div>
                <button type="submit" className='adbutton' style={{ padding: '10px', marginLeft: '450px' }}>Add Course</button>
              </form>
            </div>
          </Modal>

          <Modal
            isOpen={showEditForm}
            onRequestClose={() => setShowEditForm(false)}
            contentLabel="Edit Course Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="edit-course-form">
              <h3>Edit Course</h3>
              <button onClick={() => setShowEditForm(false)} style={{marginLeft:'550px',backgroundColor:'transparent',border:'none'}}>{<CloseIcon/>}</button>
                    <div className="underline" style={{backgroundColor:"black"}}></div>
              <form onSubmit={(e) => {
                e.preventDefault();
                const editedCourse = {
                  id: selectedCourse.id,
                  acaname: e.target.elements.acaname.value,
                  name: e.target.elements.name.value,
                  time: e.target.elements.time.value,
                  ns: e.target.elements.ns.value,
                  dur: e.target.elements.dur.value,
                  desc:e.target.elements.desc.value
                };
                handleEditCourse(editedCourse);
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academy Name</label>
                    <input type="text" name="acaname" className='input_'  defaultValue={selectedCourse ? selectedCourse.acaname : ''} />
                  </div>
                  <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" name="name" className='input_'  defaultValue={selectedCourse ? selectedCourse.name : ''} />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="text" name="time" className='input_'  defaultValue={selectedCourse ? selectedCourse.time : ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>No. of Students</label>
                    <input type="number" name="ns" className='input_'  defaultValue={selectedCourse ? selectedCourse.ns : ''} />
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input type="text" name="dur" className='input_'  defaultValue={selectedCourse ? selectedCourse.dur : ''} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea name='desc' className='input_'  defaultValue={selectedCourse ? selectedCourse.desc : ''} />
                  </div>
                </div>
                <button type="submit" className='adbutton' style={{ padding: '10px', marginLeft: '450px' }}>Update Course</button>
              </form>
            </div>
          </Modal>


          {filteredCourse.map((item) =>
            <div className="adcourse" key={item.id}>
              <div className="adcourse_details">
                <div className="adcourse_name" id={item.id}>
                  <h3>{item.acaname}</h3>
                  <h4>{item.name}</h4>
                  <p>{item.time}</p>
                </div>
                <div className="adcourse_det">
                  <h4> No.of.students:{item.ns}</h4>
                  <p>{item.dur}</p>
                  <span>
                    <button className='addbutton' onClick={() => {
                      setSelectedCourse(item);
                      setShowEditForm(true);
                    }}>{<EditIcon/>}</button>
                    <button className='addbutton' onClick={() => handleDeleteCourse(item.id)}>{<DeleteIcon/>}</button>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Adminsidebar>
    </>
  );
}

export default Admincourse;
