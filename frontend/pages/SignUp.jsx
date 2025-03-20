import React from 'react'
import { useState } from 'react'
import logo from '../pictures/logo.png'
import signup from '../styles/signup.module.css'
import NavBar from '../components/Navbar.jsx'



const SignUp = () => {
  // const [values, setValue] = useState({
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   email: '',
  //   password: ''

  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch("'http://localhost:3570/signup")
  //   .then(response => response.json())
  //   .then(json => setValue(json));

  // }

  // const newSignup = () => {

  // }


  return (
    <div>


      <NavBar />

      <div>
        <title>SignUp!</title>
        <div className={signup.topContainer}>
          <img src={logo} alt='The webiste logo that displays a plant' className={signup.logo} />
          <h2>New User?</h2>
          <h4>Please fill this signup form to join the community!</h4>
        </div>
        <form  className={signup.signupContainer} >
          <div className={signup.nameContainer}>
            <label>Enter your first name: </label>
            <input type='text'
              name='firstName'
              placeholder='First Name'
              onChange={e => setValue({ ...values, firstName: e.target.value })} />

            <br />

            <label>Enter your last name: </label>
            <input type='text'
              name='lastName'
              placeholder='Last Name'
              onChange={e => setValue({ ...values, lastName: e.target.value })} />
            <br />

          </div>

          <label>Make a username! </label>
          <input type='text'
            placeholder='Username'
            name='username'
            onChange={e => setValue({ ...values, username: e.target.value })} />
          <br />

          <label>Enter a valid email: </label>
          <input type='email'
            placeholder='example@mail.com'
            name='email'
            onChange={e => setValue({ ...values, email: e.target.value })} />
          <br />

          <label>Please create your password: </label>
          <input type='password'
            placeholder='Password must be 8 characters'
            name='password'
            onChange={e => setValue({ ...values, password: e.target.value })} />

          <br />


          <input type='submit' className={signup.submit} />

        </form>
      </div>
    </div>
  )
}

export default SignUp