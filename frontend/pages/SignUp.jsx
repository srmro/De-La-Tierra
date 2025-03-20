import React from 'react'
import { useState } from 'react'
import logo from '../pictures/logo.png'
import signup from '../styles/signup.module.css'
import NavBar from '../components/Navbar.jsx'


const SignUp = () => {


  return (
    <div>


      <NavBar />

      <div>
        <div className={signup.topContainer}>
          <img src={logo} alt='The webiste logo that displays a plant' className={signup.logo} />
          <h2>New User?</h2>
          <h4>Please fill this signup form to join the community!</h4>
        </div>
        <form className={signup.signupContainer} >
          <div className={signup.nameContainer}>
            <label>Enter your first name: </label>
            <input type='text'
              name='firstName'
              placeholder='First Name' />

              <br/>

            <label>Enter your last name: </label>
            <input type='text'
              name='lastName'
              placeholder='Last Name' />
            <br />

          </div>

          <label>Make a username! </label>
          <input type='text'
            placeholder='Username' />
          <br />

          <label>Enter a valid email: </label>
          <input type='email'
            placeholder='example@mail.com' />
          <br />

          <label>Please create your password: </label>
          <input type='password'
            placeholder='Password must be 8 characters' />
          <br />

          <input type='submit' className={signup.submit} />

        </form>
      </div>
    </div>
  )
}

export default SignUp