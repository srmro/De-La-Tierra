import { useState, useEffect } from 'react'
import React from 'react';
import perennial from '../styles/perennials.module.css'
import Navbar from './Navbar';

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
      <Navbar/>
      {perennials.map((item) => (
        <div className={perennial.perennialContainer}>
          <div className={perennial.topContainer}>
            <h2>{item.name}</h2>
            <h5>Season: {item.season}</h5>
            <img src={item.plant_img} className={perennial.perennial} />
            <h3>Fun facts:</h3>
            <p>{item.info}</p>
          </div>
          <div className={perennial.careContainer}>
            <h3>Care Guide:</h3>
         
              <h4>Planting</h4>
              <p>{item.planting}</p>
              <p>{item.space}</p>
              <h4>Light</h4>
              <p>{item.light}</p>
              <h4>Water</h4>
              <p>{item.watering}</p>
              <h4>Soil and Fertilizer</h4>
              <p>{item.soil}</p>
              <p>{item.fertilizer}</p>


          </div>
        </div>





      ))}


    </div>

  )
}

export default Perennials