import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import logo_dark from '../images/logo_dark.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Usersidebar.css'

const Usersidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/profile",
            name:"Profile",
            icon:<ManageAccountsIcon/>
        },
        {
            path:"/academy",
            name:"Academy",
            icon:<SchoolIcon/>
        },
        {
            path:"/encourse",
            name:"EnrolledCourse",
            icon:<AutoStoriesIcon/>
        },
        {
            path:"/login",
            name:"Logout",
            icon:<LogoutIcon/>
        }
    ]
    return(
        <>
        <div className="side_container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_sec">
                <img style={{display: isOpen ? "block" : "none"}} src={logo_dark} alt="logo" className='logoo'/>
                <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                    <MenuIcon  onClick={toggle}/>
                </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
                <main>{children}</main>
        </div>
        </>
    )
}
export default Usersidebar;