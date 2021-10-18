import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';
import './Service.css'

const Service = ({item}) => {
    const {id,title,img} = item;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <SmoothList>
            <Card  className="bg-light border-0 rounded cart-detail">
                <div className="rounded">
                  <Card.Img className="" variant="top" src={img} />
                </div>
            <Card.Body style={{backgroundColor: '#3D2C8D'}}>
                <Card.Title className="text-white">{title}</Card.Title>               
                <Button className="ps-0 my-2" variant="none"><Link className="text-decoration-none bg-warning px-3 text-black rounded py-2 " to={`details/${id}`}>details</Link> </Button>
            </Card.Body>
            </Card>
            </SmoothList>
        </div>
    );
};

export default Service;