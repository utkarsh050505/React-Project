import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img
             className='loginScreen__logo'
             src='https://img.icons8.com/?size=100&id=20519&format=png&color=000000' 
             alt=''/>
             <button className='loginScreen__button'>
                Sign In
             </button>
        </div>
        </div>
  )
}

export default LoginScreen;