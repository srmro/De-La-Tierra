
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


        getCrops;

    }, []);
    return (
        <div>Crops</div>
    )
}

export default Crops