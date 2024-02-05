import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (  
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
