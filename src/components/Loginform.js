import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, fetchUserProfile } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const LoginForm = () => {

  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // redux state
  const {loading, error} = useSelector((state)=>state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin =(e)=>{
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Access Denied Invalid Credentials');
      return;
    }

    let userCredentials={
      email,password
    }

    dispatch(loginUser(userCredentials)).then((result)=>{

      if(result.payload && !result.error){

        dispatch(fetchUserProfile()).then(() => {
         
          setEmail('');
          setPassword('');
          setErrorMessage('');
          navigate('/user');
        });
        
      } else {
        setErrorMessage('Access Denied Invalid Credentials');
      } 
    })
  } 

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="username" 
            value={email} onChange={(e) =>setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
            value={password} onChange={(e) =>setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit' className="sign-in-button">
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>

          {errorMessage && (
            <div className='alert' role='alert'>
              {errorMessage}
            </div>
          )}

          {error && (
            <div className='alert' role='alert'>
              {error}
            </div>
        )}
      </section>
    </main>
  );
};

export default LoginForm;