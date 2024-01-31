import React, { useState, useEffect } from 'react';
import '../styles/Academy.css';
import Rating from '@mui/material/Rating';
import encourse from '../data_/coursedata.jsx'; 
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Enrolledcourse.css'
import Usersidebar from './Usersidebar.jsx';
// import { useNavigate } from 'react-router-dom';

function Enrolledcourse() {
  const [course, setCourse] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const navigate=useNavigate();

  useEffect(() => {
    setCourse(encourse);
    setFilteredCourse(encourse); // Initialize filtered academies with all academies
  }, []);

  const handleSearch = () => {
    const filtered = course.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourse(filtered);
  };

  // const handleMyLearningClick = () => {
  //   navigate('/enroll'); // Navigate to /enroll route
  // };
    return(
      <>
    <Usersidebar>
        <div className="course_cont">
      <div className="course_search">
        <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        <button className="button"  onClick={handleSearch}>{<SearchIcon/>}</button>
      </div>
      {filteredCourse.map((item) =>
        <div className="course" key={item.id}>
          {/* <div className="aca_img">
            <img src={item.img} alt={item.name} />
          </div> */}
          <div className="course_details">
            <div className="course_name" id={item.id}>
              <h3>{item.acname}</h3>
            </div>
            <div className="course_det">
              <h4>{item.name}</h4>
              <p>{item.join}</p>
              <p>to</p>
              <p>{item.end}</p>
            </div>
            <Rating name="controlled" className='rating' controlled size='small' />
            <button className='button_'>My Learning</button>
            <button className='delete'><DeleteIcon/></button>
          </div>
        </div>
      )}
    </div>
    </Usersidebar>
    </>
    )
}
export default Enrolledcourse;