// src/components/EditProfileForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../services/authService';


const EditProfileForm = ({ profile, onCancel }) => {
    const [userName, setUserName] = useState(profile?.userName || '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ userName }));
    };

    return (
        <div className="sign-in-content edit-form">
          <h1>Edit user info</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper-edit">
              <label htmlFor="userName">User name:</label>
              <input
                id="userName"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="firstName">First name:</label>
              <input
                id="firstName"
                type="text"
                value={profile?.firstName}
                disabled
                style={{ backgroundColor: '#f0f0f0' }} 
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                type="text"
                value={profile?.lastName}
                disabled
                style={{ backgroundColor: '#f0f0f0' }} 
              />
            </div>
            <div className='gap'>
              <button className='edit-button edit-form-button' type="submit">Save</button>
              <button className='edit-button edit-form-button' type="button" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
      
};

export default EditProfileForm;
