import React, { useEffect, useState } from 'react';
import Trainer from './Trainer/Trainer';
import './Trainers.css'

const Trainers = () => {
    const [trainers,setTrainers] = useState([])

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/yoga-data/main/trainers.json')
        .then(res=> res.json())
        .then(data=> setTrainers(data))
    })
    return (
        <div>
            <div className="trainers p-4">
                  <div className="w-75 row g-4 mx-auto my-5">
                      {trainers.map((item,index) => <Trainer key={index} trainer={item}/>)}
                  </div>
            </div>
        </div>
    );
};

export default Trainers;
