import acourse from '../data_/acoursedata';
import '../styles/acourse.css'
import Usersidebar from './Usersidebar.jsx';
import acoursedata from '../data_/acoursedata';
import { useNavigate, useParams } from 'react-router-dom';

function Acourse(){
  const navigate=useNavigate();

  const handleEnroll=()=>{
    navigate('/enroll');
  }
    return(
      <>
    <Usersidebar>
        <div className="Acourse_cont">
            {acourse.map((item) =>
        <div className="acourse">
          <div className="ac_details">
            <div className="ac_name">
              <h3>{item.name}</h3><br></br>
              <p>Desc: {item.desc}</p>
            </div>
            <div className="ac_det">
              <p><b>No.of Students:</b> {item.ns}</p><br></br>
              <p><b>Duration:</b> {item.dur}</p>
              <p><b>Timing:</b> {item.time}</p>
            </div>
            <button className='ebutton' onClick={handleEnroll}>Enroll now!</button>
          </div>
        </div>
      )}
        </div>
        </Usersidebar>
        </>
    )
}
export default Acourse;