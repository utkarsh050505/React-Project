import React from 'react';
import { auth } from '../firebase';
import "./SignupScreen.css";

function SignupScreen() {

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email' />
            <input ref={passwordRef} placeholder='Password' type='password'/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <br></br>
            <h4>
              <span className='signupScreen__gray'>New to Netflix?</span> <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
            </h4>
        </form>
        </div>
  )
}

export default SignupScreen