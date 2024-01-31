import bannimg from '../images/banimg2.jpg';
import { BsFillPlayCircleFill } from "react-icons/bs";
import '../styles/About.css'

function About(){
    return(
        <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={bannimg} alt="" className='banimg'/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h2 className="primary-heading">
        If you wish to succeed, you must brave the risk of failure
        </h2>
        <p className="primary-text">
        Welcome to ChessMind Academy, where passion meets strategy, and every move counts. 
        We are more than just a chess academy.
        </p>
        <p className="primary-text">
        We are a community dedicated to fostering a love for chess, nurturing talent, 
        and empowering individuals to reach their full potential on the chessboard
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
    )
}
export default About;