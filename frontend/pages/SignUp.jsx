import React from 'react'
import { useState } from 'react'
import signup from '../styles/signup.module.css'
import NavBar from '../components/Navbar.jsx'


const SignUp = () => {


  return (
    <div>


      <NavBar />

      <div className='signupContainer'>
        <form>
          <div className='nameContainer'>
            <label>Enter your first name:
              <input type='text'
                name='firstName'
                placeholder='First Name' /> </label>

            <label>Enter your last name:
              <input type='text'
                name='lastName'
                placeholder='Last Name' />
            </label> <br />

          </div>

          <label>Make a username!
            <input type='text'
              placeholder='Username' />
          </label> <br />

          <label>Enter a valid email:
            <input type='email'
              placeholder='example@mail.com' />
          </label> <br />

          <label>Please create your password:
            <input type='password'
              placeholder='Password must be 8 characters' /> <br />

            <input type='submit' />

          </label>


        </form>
      </div>
    </div>
  )
}

export default SignUp