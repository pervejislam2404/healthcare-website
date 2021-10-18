import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({item}) => {
    const {title,img} = item;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <Button variant="none"><Link to={`details/${title}`}>details</Link> </Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;