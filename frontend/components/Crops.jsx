import React from 'react';
import { useState, useEffect } from 'react';
import crop from '../styles/crops.module.css'
import Navbar from './Navbar';



const Crops = () => {
  const [crops, setCrops] = useState([])



  useEffect(() => {

    const getCrops = async () => {
      const response = await fetch('http://localhost:3570/crops')
      const data = await response.json();
      console.log(data)

      setCrops(data);
    }

    getCrops();

  }, []);

  return (
    <div>
      <title>Crops🍉</title>
      <Navbar/>
      {crops.map((item) => (
        <div className={crop.cropContainer}>
          <div className={crop.topContainer}>
            <h2>{item.name}</h2>
            <h5>Season: {item.season}</h5>
            <img src={item.plant_img} className={crop.crop} />
            <h3>Fun facts:</h3>
            <p>{item.info}</p>
          </div>
          <div className={crop.careContainer}>
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

export default Crops