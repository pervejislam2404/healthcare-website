import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {id} = useParams()
    const [HealthServices,setHealthService] = useState()

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/yoga-data/main/yoga.json')
        .then(res => res.json())
        .then(data=> setHealthService(data))
    },[])


    const matched = HealthServices?.find(item=> item.id=== id);

    
  
    return (
        <div className="details-bg py-5">
            <div className="container mx-auto border bg-light ">
                <div className="row">

                    <div className="row col-12 col-lg-6 p-5 article-section">
                      <div className="col-12">
                          <img style={{width: '100%'}} className="img-fluid" src={matched?.img} alt="" />
                      </div>
                      <div className="col-12 text-muted">
                          <h3 className="my-2 text-danger">{matched?.title}</h3>
                          <p className="fs-5">{matched?.description}</p>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6 p-5 detail">
                        <div className="row border-2">
                            <div className="col-12 p-2">
                                <img className="img-fluid img-responsive" src={matched?.photo1} alt="" />
                            </div>
                            <div className="col-6 p-2">
                                <img className="img-fluid img-responsive" src={matched?.photo2} alt="" />
                            </div>
                            <div className="col-6 p-2">
                                <img style={{width: '100%!important'}} className="img-fluid img-responsive" src={matched?.photo3} alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    );
};

export default Details;