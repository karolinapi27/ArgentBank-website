import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../components/LogoutButton';


const HeaderUser = () => {

  //useSelector pour accéder à l'état de l'utilisateur
  const profile = useSelector((state) => state.userProfile.profile);
  
  return (
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

      <div className="main-nav-flex">
        <Link to="/user" className="main-nav-item">
          <i className="fa fa-user-circle margin"></i>
          {profile ? profile.userName : "Login"}
        </Link>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default HeaderUser;
