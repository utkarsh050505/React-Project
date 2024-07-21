import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {

  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen__info'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Description</h3>
              <p>I am Utkarsh Mandal, and I have developed a Netflix UI clone using React-Redux and Firebase Authentication. This application allows users to log in and log out securely. It leverages the TMDB API to fetch and display movies, providing an experience similar to Netflix.</p>
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen