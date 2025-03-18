import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../pictures/logo.png'


const LogIn = () => {
    return (
        <div>
            <Navbar />
            <div className='loginContainer'>
                <div className='topContainer'>
                    <img src={logo} alt='The webiste logo that displays a plant' className='logo' />
                    <h2>Welcome Back!</h2>
                    <h4>Don't have an account?</h4>
                </div>
                <form>
                <label>Enter email:</label> <br/>
                <label>Enter password:</label> <br/>
                <button type='submit'>Log In</button>

                </form>
            </div>
        </div>
    )
}

export default LogIn