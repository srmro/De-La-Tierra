import { useState, useEffect } from 'react'
import React from 'react';
import perennials from '../styles/perennials.module.css'

const Perennials = () => {
  const [perennials, setPerennials] = useState([]);

  useEffect(() => {

    const getPerennials = async () => {
      const response = await fetch('http://localhost:3570/perennials');
      const data = await response.json();
      console.log(data)

      setPerennials(data);
    }


    getPerennials();

  }, []);


  return (

    <div>
    {perennials.map((item) => (
      <div className='perennialContainer'>
        <div className='topContainer'>
          <h2>{item.name}</h2>
          <h5>Season: {item.season}</h5>
          <img src={item.plant_img} />
          <h3>Fun facts:</h3>
          <p>{item.info}</p>
          <div className='careContainer'>
          <h3>Care Guide:</h3>
          <ul>
            <h4>Planting</h4> 
            <li>{item.planting}</li>
            <li>{item.space}</li>
            <h4>Light</h4>
            <li>{item.space}</li> 
            <h4>Water</h4>
            <li>{item.watering}</li> 
            <h4>Soil and Fertilizer</h4>
            <li>{item.soil}</li>
            <li>{item.fertilizer}</li> 


          </ul>

          </div>
        </div>
      </div>




    ))}


  </div>

  )
}

export default Perennials