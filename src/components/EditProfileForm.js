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
       <div>
        <h1>Edit user info</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <strong>User Name:</strong>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <strong>First Name:</strong>
                <span>{profile?.firstName}</span>
            </div>
            <div>
                <strong>Last Name:</strong>
                <span>{profile?.lastName}</span>
            </div>
            <div className='gap'>
                <button className='edit-button' type="submit">Save</button>
                <button className='edit-button' type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
        </div>
    );
};

export default EditProfileForm;
