import React from 'react'
import { useState, useEffect } from 'react'
import annual from '../styles/annuals.module.css'
import Navbar from './Navbar'

const Annuals = () => {
  const [annuals, setAnnuals] = useState([])


  useEffect(() => {

    const getAnnuals = async () => {
      const response = await fetch('http://localhost:3570/annuals');
      const data = await response.json();
      console.log(data)

      setAnnuals(data);
    }


    getAnnuals();

  }, []);


  return (
    <div>
      <Navbar/>
      {annuals.map((item) => (
        <div className={annual.flowerContainer}>
          <div className={annual.topContainer}>
            <h2>{item.name}</h2>
            <h5>Season: {item.season}</h5>
            <img src={item.plant_img} className={annual.annual} />
            <h3>Fun facts:</h3>
            <p>{item.info}</p>
          </div>
          <div className={annual.careContainer}>
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

export default Annuals