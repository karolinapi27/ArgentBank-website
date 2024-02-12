// src/Pages/ProfilePage.js
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderUser from '../components/HeaderUser';
import EditProfileForm from '../components/EditProfileForm';
import accountsData from '../data/accountsData';
import AccountSection from '../components/AccountSection';
import Footer from '../components/Footer';

const UserPage = () => {

  //useSelector pour accéder à l'état de l'utilisateur
  const profile = useSelector((state) => state.userProfile.profile);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="app-container">
      <HeaderUser />
     
      <main className="main bg-dark">
        {!isEditing ? (
          <div className="header">
            <h1>Welcome back<br />{profile ? `${profile.firstName} ${profile.lastName}` : "User"}</h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          </div>
        ) : (
          <EditProfileForm
            profile={profile}
            onCancel={() => setIsEditing(false)}
          />
        )}
        <h2 className="sr-only">Accounts</h2>  
        {accountsData.map(account => (
          <AccountSection key={account.id} {...account} />
        ))}
      </main>  
      <Footer />
    </div>
  );
};

export default UserPage;