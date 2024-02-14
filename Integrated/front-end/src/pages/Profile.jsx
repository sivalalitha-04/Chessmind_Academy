import '../styles/Profile.css';
import React, { useState } from 'react';
import profile from '../images/profile.jpg'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SaveIcon from '@mui/icons-material/Save';
import Usersidebar from './Usersidebar';


function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Abi');
  const [email, setEmail] = useState('abi@example.com');
  const [mobile, setMobile] = useState('9363242400');

  return (
    <>
    <Usersidebar>
    <div className="profile">
    <div className="pimg">
      <div className="profile_container">
        <div className="profile-header">
          <img src={profile} width="100px" />
          <h1>{username}</h1>
          <div className="underline" style={{marginLeft:"50px",marginBottom:"0px"}}></div>
        </div>
        <div className="profile-details">
        <div className="user-info">
            <table>
                <tbody>
                <tr>
                    <td><h3>Username</h3></td>
                    <td>
                    <h4>
                        {username}
                    </h4>
                    </td>
                </tr>
                <tr>
                    <td><h3>Email</h3></td>
                    <td>
                    <h4>
                        {email}
                    </h4>
                    </td>
                </tr>
                <tr>
                    <td><h3>Mobile Number</h3></td>
                    <td>
                    <h4>
                        {mobile}
                    </h4>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
    </div>
    </div>
    </Usersidebar>
    </>
  );
}

export default Profile;
