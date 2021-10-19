import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';
import './Service.css'

const Service = ({item}) => {
    const {id,session,duration,title,img,description} = item;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <SmoothList>
            <Card  className="bg-light border-0 rounded cart-detail">
                <div className="rounded">
                  <Card.Img className="" variant="top" src={img} />
                </div>
                <Card.Body style={{backgroundColor: '#3D2C8D'}}>
                    <Card.Title className="text-white">{title}</Card.Title> 
                    <Card.Text className="text-white">
                        {description.slice(0,80)}
                    </Card.Text>              
                <div className="row">
                    <div className="col-12 col-lg-6">
                          <Button className="ps-0 my-2" variant="none"><Link className="text-decoration-none bg-warning px-3 text-black rounded py-2 " to={`details/${id}`}>details</Link> </Button>
                    </div>

                    <div className="col-12 col-lg-6 text-center">
                        <h5 className="text-danger">{session}</h5>
                        <p className="text-white">{duration}</p>
                    </div>
                </div>
                </Card.Body>
            </Card>
            </SmoothList>
        </div>
    );
};

export default Service;