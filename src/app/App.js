import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';


function App() {
  const isLoggedIn = useSelector((state) => !!state.user.user);
  return (  
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={isLoggedIn ? <UserPage /> : <Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default App;
