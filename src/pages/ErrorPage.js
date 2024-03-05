import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPage = () => {
  
  return (
  <div>
    <Header/>
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Return to the homepage</a>
    </div>
    <Footer/>
  </div>
)};

export default ErrorPage;