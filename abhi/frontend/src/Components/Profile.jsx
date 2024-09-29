import React, { useState } from 'react';
import ProfilePic from '../Assets/person.svg';
import '../Profile.css';
import LogoutModal from './LogoutModal';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalOpen(false);
    console.log("User logged out");
    localStorage.removeItem('userName')
    window.location.href = '/login';    
  };

  return (
    <div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu"> 
        <li className="nav-item dropdown">
          <a 
            className="nav-link dropdown-toggle" 
            href="#" 
            id="navbarDropdown" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <div className="profile-pic">
            <img src={ProfilePic} alt="Profile" className="img-fluid rounded-circle" /> &nbsp; <span style={{fontSize:'20px'}}>{localStorage.getItem('userName')}</span>
            </div>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="/accounts">
                <i className="fas fa-sliders-h fa-fw"></i> Account
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/settings">
                <i className="fas fa-cog fa-fw"></i> Settings
              </a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button 
                className="dropdown-item" 
                onClick={() =>setIsModalOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} // Styles to make it look like a link
              >
                <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
              </button>
            </li>
          </ul>
        </li>
      </ul>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default Profile;
