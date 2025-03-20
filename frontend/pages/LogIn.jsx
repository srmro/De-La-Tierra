import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../pictures/logo.png'
import login from '../styles/login.module.css'

//will add a link on signup to take to signup page
const LogIn = () => {
    return (
        <div>
            <Navbar />
        
                <div className={login.topContainer}>
                    <img src={logo} alt='The webiste logo that displays a plant' className={login.logo} />
                    <h2>Welcome Back!</h2>
                    <h4>Don't have an account? Sign up!</h4>
                </div>
                <div className={login.loginContainer}>
                <form>
                    <label>Enter email: </label>
                    <input type='email'
                    placeholder='example@mail.com' />
                    <br />
                    <label>Enter password: </label>
                    <input type='password'
                    placeholder='Enter Password' />
                    <br />
                    <button type='submit' className={login.button}>Log In</button>

                </form>
            </div>
        </div>
    )
}

export default LogIn