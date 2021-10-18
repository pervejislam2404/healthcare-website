import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';

const Service = ({item}) => {
    const {id,title,img} = item;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <SmoothList>
            <Card className="bg-light border-0 rounded">
                <div className="rounded">
                  <Card.Img className="" variant="top" src={img} />
                </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <Button variant="none"><Link className="text-decoration-none bg-primary px-3 text-white rounded py-2 fs-5" to={`details/${id}`}>details</Link> </Button>
            </Card.Body>
            </Card>
            </SmoothList>
        </div>
    );
};

export default Service;