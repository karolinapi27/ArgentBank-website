// src/Pages/LoginPage.js
import React from 'react';
import Loginform from '../components/Loginform';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div>
      <Header/>
      <Loginform/> 
      <Footer/>  
    </div>
  );
};

export default LoginPage;
