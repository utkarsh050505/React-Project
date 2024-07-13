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
             <div className='loginScreen__gradient' />
        </div>
        <div className='loginScreen__body'>
          <>
          <h1>Unlimited movies, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

          <div className='loginScreen__input'>
            <form>
              <input type="email" placeholder='Email Address'/>
              <button className='loginScreen__getStarted'>GET STARTED</button>
            </form>
          </div>
          </>
        </div>
        </div>
  )
}

export default LoginScreen;