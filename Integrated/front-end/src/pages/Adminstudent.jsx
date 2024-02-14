import React, { useState, useEffect } from 'react';
import Adminsidebar from './Adminsidebar';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal'; // Import Modal component
import '../styles/Adminstudent.css'; // Import CSS file for styling
import studentData from '../data_/studentdata.jsx'; // Import student data
import CloseIcon from '@mui/icons-material/Close';


Modal.setAppElement('#root'); // Set the app root element for accessibility

function Adminstudent() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/users');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error during user fetch:', error);
    }
  };

  const handleSearch = () => {
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  // const handleAdd = () => {
  //   setShowForm(true);
  //   setIsEditing(false);
  //   setFormData({
  //     name: '',
  //     id: '',
  //     acname: '',
  //     course: '',
  //     mobile: '',
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isEditing) {
  //     // Edit student
  //     const updatedStudents = students.map(student =>
  //       student.id === selectedStudent.id ? { ...student, ...formData } : student
  //     );
  //     setStudents(updatedStudents);
  //     setFilteredStudents(updatedStudents);
  //   } else {
  //     // Add new student
  //     const newStudent = { ...formData, id: Date.now() };
  //     setStudents([...students, newStudent]);
  //     setFilteredStudents([...students, newStudent]);
  //   }
  //   setShowForm(false);
  // };

  // const handleEdit = (student) => {
  //   setSelectedStudent(student);
  //   setFormData(student);
  //   setIsEditing(true);
  //   setShowForm(true);
  // };

  // const handleDelete = (id) => {
  //   const updatedStudents = students.filter(student => student.id !== id);
  //   setStudents(updatedStudents);
  //   setFilteredStudents(updatedStudents);
  // };

  return (
    <>
      <Adminsidebar>
        <div className="adcourse_cont">
          <div className="adcourse_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="adbutton" onClick={handleSearch}><SearchIcon/></button>
          </div>
          {/* <button className="addbutton" onClick={handleAdd}><AddCircleIcon/><p>Add Academy</p></button> */}
          <table className="student_table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Mobile Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.id}</td>
                  <td>{student.mobileNumber}</td>
                  <td>{student.email}</td>
                  {/* <td>
                    <button className="adbutton" onClick={() => handleEdit(student)}><EditIcon/></button>
                    <button className="adbutton" onClick={() => handleDelete(student.id)}><DeleteIcon/></button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add/Edit Student Modal */}
          {/* <Modal
            isOpen={showForm}
            onRequestClose={() => setShowForm(false)}
            contentLabel={isEditing ? "Edit Student Modal" : "Add Student Modal"}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="add-student-form">
              <h3>{isEditing ? 'Edit Student' : 'Add Student'}</h3>
              <button onClick={() => setShowForm(false)} style={{marginLeft:'550px',backgroundColor:'transparent',border:'none'}}>{<CloseIcon/>}</button>
                    <div className="underline" style={{backgroundColor:"black"}}></div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className='input_' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                  <label>Mobile Number</label>
                    <input type="text" className='input_' value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                  <label>Academy</label>
                    <input type="text" className='input_' value={formData.acname} onChange={(e) => setFormData({ ...formData, acname: e.target.value })} />
                  </div>
                  <div className="form-group">
                  <label>Course</label>
                    <input type="text" className='input_' value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} />
                  </div>
                </div>
                <button type="submit" className='adbutton' style={{backgroundColor:'black',color:'white',padding:"10px"}}>{isEditing ? 'Update' : 'Add'}</button>
              </form>
            </div>
          </Modal> */}
        </div>
      </Adminsidebar>
    </>
  );
}

export default Adminstudent;
