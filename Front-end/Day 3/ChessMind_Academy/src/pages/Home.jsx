import Navbar from "./Navbar";
import '../styles/Home.css'
import { FiArrowRight } from "react-icons/fi";
import banner from "../images/banimg.jpg";

function Home(){
    return(
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          In life, as in chess, forethought wins
          </h1>
          <p className="primary-text">
          “You may learn much more from a game you lose than from a game you win. 
          You will have to lose hundreds of games before becoming a good player.”
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
            <img src={banner} width="900px" className="ban_img"/>
        </div>
      </div>
    )
}
export default Home;