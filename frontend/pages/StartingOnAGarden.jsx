import React from 'react'
import Navbar from '../components/Navbar'

const StartingOnAGarden = () => {
  return (
    <div>
      <Navbar />
      <div className='intro'>
        <h3>Debating on starting your garden?</h3>
        <h1>Checkout these resources!</h1>
      </div>
      <div className='infoContainer'>
        <h2>Annuals</h2>
        <p>Annuals is known to provide a wide variety of flowers that provide vibrant colors</p>
      </div>

      <div className='infoContainer'>
        <h2>Perennials</h2>
        <p></p>
      </div>
      <div className='infoContainer' >
        <h2>Crops</h2>
        <p></p>

      </div>
    </div>
  )
}

export default StartingOnAGarden