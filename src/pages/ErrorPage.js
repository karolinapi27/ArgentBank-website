import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPage = () => {
  
  return (
  <div>
    <Header/>
    <div className="error-container">
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <a href="/">Retourner à la page d'accueil</a>
    </div>
    <Footer/>
  </div>
)};

export default ErrorPage;