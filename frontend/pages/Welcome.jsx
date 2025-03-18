import React from 'react'
import plantHand from "../pictures/plant-hand.avif"
import Navbar from '../components/Navbar'
import welcome from "../styles/welcome.module.css"

const Welcome = () => {
  return (
    <div>
      <head>
    <title>Welcome! 🌱</title>
      </head>
<div>
<Navbar/>
</div>

    <div className='main-header' >
<h3>Welcome to a site that unites all type of <br/><em>plant hobbyist!</em></h3>
<h1 className={welcome}>De La Tierra</h1>
<img src={plantHand} alt='Hand line art holding a plant.' className={welcome} />
    </div>


</div>
  )
}

export default Welcome