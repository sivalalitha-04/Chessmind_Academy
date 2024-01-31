import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { useState } from "react";
import './App.css'
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Usersidebar from "./pages/Usersidebar";
import Profile from "./pages/Profile";
import Academy from "./pages/Academy";
import Enrolledcourse from "./pages/Enrolledcourse";
import Acourse from "./pages/acourse";
import Enroll from "./pages/Enroll";
import Adminsidebar from "./pages/Adminsidebar";
import Adminacademy from "./pages/Adminacademy";
import Admincourse from "./pages/Admincourse";
import Adminstudent from "./pages/Adminstudent";

function App() {
  return (
    <>
    <div className="App_">
      <Router>
        {/* <Adminsidebar> */}
        <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/academy" element={<Academy/>}/>
        <Route path="/acourse" element={<Acourse/>}/>
        <Route path="/encourse" element={<Enrolledcourse/>}/>
        <Route path="/enroll" element={<Enroll/>}/>
        <Route path='/adacademy' element={<Adminacademy/>}/>
        <Route path='/adstudents' element={<Adminstudent/>}/>
        <Route path='/course' element={<Admincourse/>}/>
      </Routes>
      {/* </Adminsidebar> */}
      </Router>
    </div>
   </>
  )
}

export default App;
