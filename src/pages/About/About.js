import React from 'react';
import { Card,Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
           <div className="container text-center pt-5">
               <h1>About Studio</h1>
               <div className="">
                   <img src="http://tantra.axiomthemes.com/wp-content/uploads/2017/04/om.png" alt="" />
                   <h1>Our skills</h1>
                   <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.</p>
               </div>
               <div className="">
                   <img className="img-fluid" src="http://tantra.axiomthemes.com/wp-content/uploads/2017/04/hotspot.png" alt="" />
               </div>
              
              
           </div>
            <div className="bg-light">
               <div className="container row">

                    <div className="col-4">
                    <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>


                    <div className="col-4">
                            <Card>
                            <Card.Img variant="left" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                    </div>


                    <div className="col-4">
                      <Card>
                        <Card.Img variant="start" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default About;