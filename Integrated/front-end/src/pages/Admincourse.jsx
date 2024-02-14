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
import axios from 'axios';
import { useParams } from 'react-router-dom';

Modal.setAppElement('#root');

function Admincourse() {
  const [courses, setCourses] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [error,setError]=useState(null);
  const { academyId } = useParams();


  useEffect(() => {
    console.log('Academy ID:', academyId); // Log the academyId
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
        setCourses(response.data);
        setFilteredCourse(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchCourses();
  }, [academyId]);
  
  

  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourse(filtered);
  };
  const handleAddCourse = async (newCourse) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/courses/${academyId}`, newCourse);
      setCourses([...courses, response.data]);
      setFilteredCourse([...courses, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };
  

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
      setCourses(response.data);
      setFilteredCourse(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const [editCourse, setEditCourse] = useState({
    courseId: '',
    courseName: '',
    courseDesc: '',
    timing: '',
    nofstu: '',
    academyId: academyId // Initialize with the current academyId
  });
  
  const handleEdit = (course) => {
    console.log("Course Academy ID:", course.academyId);
    console.log(course)
    setEditCourse({
      ...course,
      academyId: academyId // Preserve the current academyId during editing
    });
    setShowEditForm(true);
  };
 
  const handleSaveEdit = () => {
    const updatedCourse = {
      ...editCourse,
      academyId: academyId
    };
  
    axios.put(`http://localhost:8080/api/courses/${editCourse.courseId}`, updatedCourse)
      .then(response => {
        if (response.status === 200) {
          fetchCourses(); // Refresh course data after successful update
          setShowEditForm(false);
        } else {
          throw new Error('Failed to update course');
        }
      })
      .catch(error => console.error('Error saving course:', error));
  };

  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await axios.delete(`http://localhost:8080/api/courses/${courseId}`);
        fetchCourses();
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };
  

  return (
    <>
      <Adminsidebar>
        <div className="adcourse_cont">
          <div className="adcourse_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="adbutton" onClick={handleSearch}>{<SearchIcon/>}</button>
          </div>
          <button className="addbutton" onClick={() => setShowForm(true)}><AddCircleIcon size="large"/>Addcourse</button>

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
                const formData = new FormData(e.target);
                const newCourse = {
                  courseName: formData.get('name'), // Use 'name' as the key for courseName
                  timing: formData.get('time'),     // Use 'time' as the key for timing
                  nofstu: formData.get('ns'),       // Use 'ns' as the key for nofstu
                  courseDesc: formData.get('desc'), // Use 'desc' as the key for courseDesc
                };
                handleAddCourse(newCourse);
              }}>

                <div className="form-row">
                  <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" className='input_'  name="name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Time</label>
                    <input type="text" className='input_'  name="time" />
                  </div>
                  <div className="form-group">
                    <label>No. of Students</label>
                    <input type="number" className='input_'  name="ns" />
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
                <div className="form-row">
                  <div className="form-group">
                    <label>Course Name</label>
                    <input
              type="text"
              value={editCourse ? editCourse.courseName : ''}
              onChange={(e) => setEditCourse({ ...editCourse, courseName: e.target.value })}
            />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input
              type="text"
              value={editCourse ? editCourse.timing : ''}
              onChange={(e) => setEditCourse({ ...editCourse, timing: e.target.value })}
            />
                  </div>
                </div>
                <div className="form-row">          
                  <div className="form-group">
                    <label>No. of Students</label>
                    <input
              type="number"
              value={editCourse ? editCourse.nofstu : ''}
              onChange={(e) => setEditCourse({ ...editCourse, nofstu: e.target.value })}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Description</label>
                    <input
              type="text"
              value={editCourse ? editCourse.courseDesc : ''}
              onChange={(e) => setEditCourse({ ...editCourse, courseDesc: e.target.value })}
            />
                  </div>
                </div>
                <button className="adbutton" style={{ padding: '10px', marginLeft: '450px' }} onClick={handleSaveEdit}>Update academy</button>
              {/* </form> */}
            </div>
          </Modal>


          {filteredCourse.map((item) =>
            <div className="adcourse" key={item.id}>
              <div className="adcourse_details">
                <div className="adcourse_name" id={item.couseId}>
                  <h3>{item.courseName}</h3>
                  <p>Timing: {item.timing}</p>
                </div>
                <div className="course-desc">
                  <p>{item.courseDesc}</p>
                </div>
                <div className="adcourse_det">
                  <p>No. of Students: {item.nofstu}</p>
                  <span>
                    <button className='addbutton' onClick={() => {
                      setShowEditForm(true);
                      handleEdit(item)}}>{<EditIcon />}</button>
                    <button className='addbutton' onClick={() => handleDelete(item.courseId)}>{<DeleteIcon />}</button>
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
