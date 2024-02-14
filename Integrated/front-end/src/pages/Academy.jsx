import React, { useState, useEffect } from 'react';
import '../styles/Academy.css';
import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';
import Usersidebar from './Usersidebar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function Academy() {
  const [academies, setAcademies] = useState([]);
  const [filteredAcademies, setFilteredAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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


  return (
    <>
      <Usersidebar>
        <div className="academy_cont">
          <div className="aca_search">
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button className="button" onClick={handleSearch}>{<SearchIcon />}</button>
          </div>
          {filteredAcademies.length > 0 ? (
            filteredAcademies.map((item) =>
              <div className="academy" key={item.academyId}>
                <div className="aca_img">
                  <img src={item.img} alt={item.academyName} />
                </div>
                <div className="aca_details">
                  <div className="aca_name">
                    <h3>{item.academyName}</h3>
                  </div>
                  <div className="aca_det">
                    <h4>{item.location}</h4>
                  </div>
                  <div className="academy-desc">
                    <p>{item.academyDesc}</p>
                  </div>
                  <Rating name="read-only" className='rating' value={item.rating} readOnly size='small' />
                  <Link to={`/acourse/${item.academyId}`} style={{textDecoration:"none"}}className="button">View</Link>
                </div>
              </div>
            )
          ) : (
            <p>No academies posted.</p>
          )}
        </div>
      </Usersidebar>
    </>
  );
}

export default Academy;
