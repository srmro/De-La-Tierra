import React from 'react'
import starting from '../styles/starting.module.css'
import Navbar from '../components/Navbar'
import annualMix from '../pictures/annual-mix.png'
import perennialMix from '../pictures/perennial-mix.webp'
import cropMix from '../pictures/harvest-mix.webp'


const StartingOnAGarden = () => {
  return (
    <div>
      <Navbar />
      <div className={starting.container}>
        <div className={starting.intro}>
          <h3>Debating on starting your garden?</h3>
          <h1>Checkout these resources!</h1>
        </div>
        <div className={starting.infoContainer}>
          <h2>Annuals</h2>
          <p>Annuals is known to provide a wide variety of flowers that provide vibrant colors onto your garden due to their rapid growth. <br />
            They grow, bloom, and make seeds all within a single season or one year.</p>
          <img src={annualMix} alt='A collage of different annual flowers' className={starting.collage} />
        </div>

        <div className={starting.infoContainer}>
          <h2>Perennials</h2>
          <p>Perennials are know to last longer than annuals with their lifespan lasting more than two years! <br />
            They grow back every spring once the last frost of winter has ceased.</p>
          <img src={perennialMix} alt='A collage of different perennials' className={starting.collage} />

        </div>
        <div className={starting.infoContainer} >
          <h2>Crops</h2>
          <p>Crops are plants that bloom out fresh produce!<br />
            It's a given opportunity to enjoy fresh, and actual organic produce from your own backyard!</p>
          <img src={cropMix} alt='A collage of different crops' className={starting.collage} />

        </div>
      </div>
    </div>
  )
}

export default StartingOnAGarden