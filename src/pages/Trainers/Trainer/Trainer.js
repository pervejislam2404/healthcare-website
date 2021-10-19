import React from 'react';
import { Card } from 'react-bootstrap';

const Trainer = ({trainer}) => {
    const {name,img,style} = trainer;
    return (
        <div className="col-12 col-lg-4">
            <Card className="border-0">
            <Card.Img src={img} />
            <Card.Body className="text-center" style={{backgroundColor:'#3D2C8D'}}>
                <Card.Title className="text-warning fs-4">{name}</Card.Title>
                <Card.Text className="text-white">
                {style}
                </Card.Text>              
            </Card.Body>
            </Card>
        </div>
    );
};

export default Trainer;