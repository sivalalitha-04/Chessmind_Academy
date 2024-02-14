import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Usersidebar from './Usersidebar';
import axios from 'axios';
import '../styles/acourse.css'



function Acourse() {
  const navigate=useNavigate();
  const { academyId } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [academyId]);

  const handleEnroll = () => {
    navigate('/enroll');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Usersidebar>
      <div className="Acourse_cont">
        {courses.map((course) => (
          <div className="acourse" key={course.courseId}>
            <div className="ac_details">
              <div className="ac_name">
                <h3>{course.courseName}</h3><br />
                <div className="course-desc">
                <p>{course.courseDesc}</p>
                </div>
              </div>
              <div className="ac_det">
                <p><b>No.of Students:</b> {course.nofstu}</p><br />
                <p><b>Duration:</b> {course.timing}</p>
              </div>
              <button className='ebutton' onClick={handleEnroll}>Enroll now!</button>
            </div>
          </div>
        ))}
      </div>
    </Usersidebar>
  );
}

export default Acourse;
