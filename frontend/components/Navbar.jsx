import React from 'react'
import logo from "../pictures/logo.png"
import { Link } from 'react-router-dom'
import NavBar from '../styles/navbar.module.css'




const Navbar = () => {
  return (
    <nav className={NavBar.navbar}>
      <div className={NavBar.navImage}>
        <img src={logo} alt='website logo' className={NavBar.logo} />
      </div>

      <div className={NavBar.navbarCenter}>
        <ul className={NavBar.navLinks}>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Newsfeed</a></li>
          <li><a>Starting on a Garden</a></li>
        </ul>
      </div>

      <div className={NavBar.navbarRight}>
        <ul className={NavBar.navLinks}>
          <li><a>Sign up</a></li>
          <li><a>Log In</a></li>
        </ul>
      </div>



    </nav >
  )
};

export default Navbar