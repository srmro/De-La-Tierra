import React from 'react'
import plantHand from "../pictures/plant-hand.avif"

const Welcome = () => {
  return (
    <div className='main-header' >
<h3>Welcome to a site that unites all type of <br/><em>plant hobbyist!</em></h3>
<h1>De La Tierra</h1>
<img src={plantHand} alt='Hand line art holding a plant.' />
    </div>
  )
}

export default Welcome