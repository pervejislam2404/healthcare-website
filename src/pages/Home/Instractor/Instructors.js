import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Instructors.css'

const Instructors = () => {
    return (
        <div className="overflow-hidden bg">
            <div className="container py-5 text-center">
                <h1 className="my-5 py-4">Meet our most talented Instructors</h1>
                <div className="row g-4">
                    <div className="col-12 col-lg-4">
                           <Card>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqUrO69nLVxAO9dWCAEFKglm1n7Tpqf6jOA&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Elena Brower</Card.Title>
                                <Card.Text>
                                Mama, teacher, artist, bestselling author and host of the Practice You Podcast, Elena has taught yoga and meditation since 1999.
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                    </div>
                    <div className="col-12 col-lg-4">
                    <Card >
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvJf4zuRBp5ofaSiXr49igz2DpY7HmRrq0Q&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Tiffany Cruikshank</Card.Title>
                                <Card.Text>
                                An international yoga teacher, author and health and wellness expert, Tiffany Cruikshank is known as a teacher’s teacher 
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                    </div>
                    <div className="col-12 col-lg-4">
                    <Card>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnn9jhf_yPg_45yNs8WVNiZ0wbGs-UbCJSTw&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Noah Maze</Card.Title>
                                <Card.Text>
                                Noah Mazéhas devoted his life to the subject of yoga. Noah is best known for his clear, precise and methodical teaching style, his tangible knowledge, and his palpable
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;