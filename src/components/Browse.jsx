import React from 'react'
import Header from './Header'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate =useNavigate()
  const handleSignout = () => {
    console.log("trigger")
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div >
      <Header />
      <div className='float-right'>
        <button onClick={handleSignout}>Signout</button>
      </div>
    </div>
  )
}

export default Browse
