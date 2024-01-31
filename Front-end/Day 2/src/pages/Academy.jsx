import React, { useState, useEffect } from 'react';
import '../styles/Academy.css';
import Rating from '@mui/material/Rating';
import academyData from '../data_/data.jsx'; 
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Acourse from './acourse.jsx';
import Usersidebar from './Usersidebar.jsx';
import { useNavigate } from 'react-router-dom';

function Academy() {
  const [academies, setAcademies] = useState([]);
  const [filteredAcademies, setFilteredAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    // Set academies from JSON data
    setAcademies(academyData);
    setFilteredAcademies(academyData); // Initialize filtered academies with all academies
  }, []);

  const handleSearch = () => {
    const filtered = academies.filter(academy =>
      academy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAcademies(filtered);
  };
  const handleViewCourse = (id) => {
    navigate(`/acourse`);
  };

  return (
    <>
    <Usersidebar>
    <div className="academy_cont">
      <div className="aca_search">
        <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        <button className="button"  onClick={handleSearch}>{<SearchIcon/>}</button>
      </div>
      {filteredAcademies.map((item) =>
        <div className="academy" key={item.id}>
          <div className="aca_img">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="aca_details">
            <div className="aca_name">
              <h3>{item.name}</h3>
            </div>
            <div className="aca_det">
              <h4>{item.place}</h4>
              <p>{item.dur}</p>
            </div>
            <Rating name="read-only" className='rating' value={2} readOnly size='small' />
            <button className='button' onClick={handleViewCourse.bind(null, item.id)}>View</button>
          </div>
        </div>
      )}
    </div>
    </Usersidebar>
    </>
  );
}

export default Academy;
