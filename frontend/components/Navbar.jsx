import React from 'react'
import logo from "../pictures/logo.png"
import { Link } from 'react-router-dom'
import NavBar from '../styles/navbar.module.css'




const Navbar = () => {
  return (
    <nav className={NavBar.navbar}>
      <div className={NavBar.navImage}>
        <Link to={"/"}>
        <img src={logo} alt='website logo' className={NavBar.logo} />
        </Link>
      </div>

      <div className={NavBar.navbarCenter}>
        <ul className={NavBar.navLinks}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/newsfeed"}>Newsfeed</Link></li>
          <li><Link to={"/starting-on-a-garden"}>Starting on a Garden</Link></li>
        </ul>
      </div>

      <div className={NavBar.navbarRight}>
        <ul className={NavBar.navLinks}>
          <li><Link to ={"/signup"}>Sign up</Link></li>
          <li><Link to ={"/login"}>Log In</Link></li>
        </ul>
      </div>



    </nav >
  )
};

export default Navbar