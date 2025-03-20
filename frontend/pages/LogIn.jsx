import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../pictures/logo.png'
import login from '../styles/login.module.css'

//will add a link on signup to take to signup page
const LogIn = () => {
    return (
        <div className={login.background}>
            <title>Login!</title>
            <Navbar />

        
                <div className={login.topContainer}>
                    <img src={logo} alt='The webiste logo that displays a plant' className={login.logo} />
                    <h2>Welcome Back!</h2>
                    <h4>Don't have an account? <Link to={"/signup"}>Sign up!</Link></h4>
                </div>
                <div className={login.loginContainer}>
                <form>
                    <label>Enter email: </label>
                    <input type='email'
                    placeholder='example@mail.com'
                    name='email' />
                    <br />
                    <label>Enter password: </label>
                    <input type='password'
                    placeholder='Enter Password'
                    name='password' />
                
                    <br />
                    <button type='submit' className={login.button}>Log In</button>

                </form>
            </div>
        </div>
    )
}

export default LogIn