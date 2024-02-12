// src/Pages/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import Features from '../components/FeaturesItems';
import Header from '../components/Header';
import HeaderUser from '../components/HeaderUser'
import Footer from '../components/Footer';

const HomePage = () => {
  
  const isLoggedIn = useSelector((state) => !!state.user.user);

  return (
    <div className="app-container">
      {isLoggedIn ? <HeaderUser /> : <Header />}
      <main className="main">
        <Banner/>
        <Features/>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
