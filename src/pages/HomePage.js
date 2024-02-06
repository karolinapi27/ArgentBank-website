// src/Pages/HomePage.js
import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/FeaturesItems';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
  
    <div>
      <Header/>
      <Banner/>
      <Features/>
      <Footer/>
    </div>

  );
};

export default HomePage;
