import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../feature/user.slice';
import { clearUserProfile } from '../feature/user.profile.slice'; 
import { useNavigate } from 'react-router-dom'; 
import { persistor } from '../app/store';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearUserProfile());
        persistor.purge(); 
        navigate('/'); 
    };

    return (
        <div onClick={handleLogout} className="logout-button" style={{cursor: 'pointer'}}>
            <i className="fa fa-sign-out"></i> Sign Out
        </div>
    );
};
export default LogoutButton;