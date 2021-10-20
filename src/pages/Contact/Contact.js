import React from 'react';
import Map from './Map';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-bg">
            <div className="container mx-auto">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 px-5">
                        {/* location */}


                        <h2 className="text-danger">Get in touch</h2>
                        <div className="my-5 row g-3">
                            <div className="col-12 col-lg-4">
                            <span className="border rounded-pill px-4 py-2 fs-5 bg-warning text-white d-block">Newyork city</span>
                            </div>
                            <div className="col-12 col-lg-4">
                            <span className="border bg-danger rounded-pill fs-5 px-4 py-2 text-white d-block">Los Angeles</span>
                            </div>
                            <div className="col-12 col-lg-4">
                              <span className="border bg-danger rounded-pill fs-5 px-4 py-2 text-white d-block">JackjonVile</span>
                            </div>
                            
                           
                        </div>

                    {/* service-location  */}


                        <h2 className="text-danger">NewYork city</h2>
                        <div className="row bg-danger text-white rounded shadow-lg p-3">
                            <div className="col-1">
                            <i className="fas fa-globe-europe fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Address</h4>
                                <p>21/17, Level 4 Steel Rock St, Newyork City,Los Angeles 5000, USA.</p>               
                            </div>
                        </div>

                        <div className="row bg-danger text-white rounded shadow-lg p-3 my-3">
                            <div className="col-1">
                            <i className="fas fa-envelope-open-text fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Ask some things us</h4>
                                <p>Mail@HealthCoach.com</p>               
                            </div>
                        </div>


                        <div className="row bg-danger text-white rounded shadow-lg p-3">
                            <div className="col-1">
                            <i className="fas fa-phone-volume fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Call Us</h4>
                                <p>+123-456-7890 , 1-800-425-8910</p>               
                            </div>
                        </div>

                        {/* contact-form */}

                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <h2 className="mb-5 text-danger">Send us message</h2>
                        <div className="row">
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded bg-dark fs-5" type="text" placeholder="Your name..."/>
                            </div>
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded bg-dark fs-5" type="email" placeholder="Your mail..."/>
                            </div>
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded bg-dark fs-5" type="Number" placeholder="Number"/>
                            </div>
                            <div className="col-6 p-2 bg-secondary">
                              <select className="w-100 p-2 rounded" id="cars">
                                <option>Student</option>
                                <option>Teacher</option>
                                <option>Business</option>
                                <option>Other</option>
                              </select>
                            </div>

                            <div className="col-12 p-2">
                            <textarea className="w-100 p-2 rounded bg-dark fs-5 text-muted" value="drop your comment" id="w3review" rows="10" />
                            </div>
                            
                        </div>
                        <button className="btn btn-warning text-white px-3 fs-4">Submit</button>

                    </div>
                </div>
            </div>

            {/* google-map */}
          
            <Map/>
        </div>
    );
};

export default Contact;