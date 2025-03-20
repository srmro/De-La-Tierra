import React from 'react';
import { useState, useEffect } from 'react';
import crops from '../styles/crops.module.css'




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
      {crops.map((item) => (
        <div className='cropContainer'>
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

export default Crops