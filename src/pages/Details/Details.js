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
            <div className="container mx-auto border my-5">
                <div className="row">

                    <div className="row col-12 col-lg-6 p-5">

                      <div className="col-12">
                          <img style={{width: '100%'}} className="img-fluid" src={matched?.img} alt="" />
                      </div>

                      <div className="col-12">
                          <h3 className="my-2">{matched?.title}</h3>
                          <p>{matched?.description}</p>

                      </div>

                    </div>

                    <div className="col-12 col-lg-6">
                        this is details {id}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Details;