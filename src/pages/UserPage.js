// src/Pages/ProfilePage.js
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderUser from '../components/HeaderUser';
import EditProfileForm from '../components/EditProfileForm';
import Footer from '../components/Footer';
import '../index.css';


const UserPage = () => {

  //useSelector pour accéder à l'état de l'utilisateur
  const profile = useSelector((state) => state.userProfile.profile);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <HeaderUser/>
     
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
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>  
    </div>
  );
};

export default UserPage;
