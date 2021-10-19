import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'


const Services = () => {
    const [healthService,setHealthService] = useState([])

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/yoga-data/main/yoga.json')
        .then(res => res.json())
        .then(data=> setHealthService(data))
    },[])



    return (
        <div className="p-5 banner">
            <div className="w-75 mx-auto row g-5 ">
         
                    {
                        healthService.map((item,index)=> <Service key={index} item={item}/>)
                    }
      
            </div>
        </div>
    );
};

export default Services;