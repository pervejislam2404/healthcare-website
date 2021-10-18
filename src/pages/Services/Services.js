import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [healthService,setHealthService] = useState([])

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/yoga-data/main/yoga.json')
        .then(res => res.json())
        .then(data=> setHealthService(data))
    },[])



    return (
        <div className="container mx-auto row g-5 my-5 ">
         
            {
               healthService.map((item,index)=> <Service key={index} item={item}/>)
            }
         
        </div>
    );
};

export default Services;