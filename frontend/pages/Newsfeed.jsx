import React from 'react'
import Navbar from '../components/Navbar.jsx'
import newsfeed from '../styles/newsfeed.module.css'
import contruct from '../pictures/under-construction.gif'


const Newsfeed = () => {
  return (
    <div>
      <title>Newsfeed</title>
        <Navbar/>
        <div className={contruct.container}>
<h1>Sorry! This page is still in development! 🚧</h1>
<img src={contruct} alt='a motion picture that shows that page is under development' className={newsfeed.gif} />

        </div>
    </div>
  )
}

export default Newsfeed