import { useState, useEffect } from 'react'
import perennials from '../styles/perennials.module.css'

const Perennials = () => {
  const [perennials, setPerennials] = useState([])
  
  useEffect(() => {
  
  const getPerennials = async () => {
    const response = await fetch('http://localhost:3570/annuals');
    const data = await response.json();
    console.log(data)

    setPerennials(data);
  }


    getPerennials();

  }, []);


  return (
    


    <div>

        
    </div>
  )
}

export default Perennials