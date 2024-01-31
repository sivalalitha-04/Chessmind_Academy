import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import logo_dark from '../images/logo_dark.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Adminsidebar.css'

const Adminsidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/adacademy",
            name:"Academy",
            icon:<SchoolIcon/>
        },
        {
            path:"/adstudents",
            name:"Students",
            icon:<PeopleAltIcon/>
        },
        {
            path:"/login",
            name:"Logout",
            icon:<LogoutIcon/>
        }
    ]
    return(
        <>
        <div className="aside_container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="asidebar">
                <div className="atop_sec">
                <img style={{display: isOpen ? "block" : "none"}} src={logo_dark} alt="logo" className='logoo'/>
                <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="abars">
                    <MenuIcon  onClick={toggle}/>
                </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="alink" activeclassName="active">
                            <div className="aicon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
                <main className='amain'>{children}</main>
        </div>
        </>
    )
}
export default Adminsidebar;