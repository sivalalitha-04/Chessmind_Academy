import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo_light from '../images/logo_light.png'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Person2Icon from '@mui/icons-material/Person2';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CallIcon from '@mui/icons-material/Call';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Navbar =() => {
  const[openMenu, setOpenMenu]=useState(false)
  const menuOptions = [
    {
      text:"Home",
      icon:<HomeIcon/>
    },
    {
      text:"About",
      id:"about",
      icon:<InfoIcon/>
    },
    {
      text:"Contact",
      id:"contact",
      icon:<CallIcon/>
    },
    {
      text:"SignIn/SignUp",
      icon:<Person2Icon/>
    },
  ]

  return (
    <>
    <nav>
    <div className="nav-logo-container">
        <img src={logo_light} alt="logo" className='logo'/>
        </div>
        <div className='navbar-links-container'>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/login" id="link" className='primary-button'>SignIn/SignUp
              </Link>
        </div>
        <div className="navbar-menu-container">
          <MenuIcon onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    <div id="">
    <div className="home-container">
    <Home/>
    </div>
    </div>
    <div id="about">
    <About/>
    </div>
    <div id="contact">
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default Navbar;

