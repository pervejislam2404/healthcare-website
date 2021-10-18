import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const [HealthServices,setHealthService] = useState()

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/yoga-data/main/yoga.json')
        .then(res => res.json())
        .then(data=> setHealthService(data))
    },[])


    const matched = HealthServices?.find(item=> item.id=== id);

    console.log(matched);
  
    return (
        <div>
            <div className="container mx-auto border">
                <div className="row">

                    <div className="row col-6">

                      <div className="col-12">
                          <img className="img-fluid" src={matched?.img} alt="" />
                      </div>

                      <div className="col-12">
                          <p>{matched?.description}</p>

                      </div>

                    </div>

                    <div className="col-6">
                    this is details {id}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Details;