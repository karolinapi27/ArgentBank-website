import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../components/LogoutButton';
import '../index.css';

const HeaderUser = () => {

  //useSelector pour accéder à l'état de l'utilisateur
  const profile = useSelector((state) => state.userProfile.profile);
  
  return (
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {profile ? profile.firstName : "Login"}
          </Link>
          <LogoutButton />
        </div>
    </nav>
  );
};

export default HeaderUser;
