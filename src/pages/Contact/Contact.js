import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 px-5">
                        <h2>Get in touch</h2>
                        <div className="my-5">
                            <span className="border rounded-pill px-3 py-2 bg-primary text-white me-2 ">Newyork city</span>
                            <span className="border rounded-pill px-3 py-2 mx-2">Los Angeles</span>
                            <span className="border rounded-pill px-3 py-2 mx-2">JackjonVile</span>
                        </div>
                        <h2>NewYork city</h2>
                        <div className="row bg-light rounded shadow-lg p-3">
                            <div className="col-1">
                            <i class="fas fa-globe-europe fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Address</h4>
                                <p>21/17, Level 4 Steel Rock St, Newyork City,Los Angeles 5000, USA.</p>               
                            </div>
                        </div>

                        <div className="row bg-light rounded shadow-lg p-3 my-3">
                            <div className="col-1">
                            <i class="fas fa-envelope-open-text fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Ask some things us</h4>
                                <p>Mail@HealthCoach.com</p>               
                            </div>
                        </div>


                        <div className="row bg-light rounded shadow-lg p-3">
                            <div className="col-1">
                            <i class="fas fa-phone-volume fs-2 text-primary"></i>
                            </div>
                            <div className="col-11">
                                <h4>Call Us</h4>
                                <p>+123-456-7890 , 1-800-425-8910</p>               
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <h2 className="mb-5">Send us message</h2>
                        <div className="row">
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded" type="text" placeholder="your name"/>
                            </div>
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded" type="email" placeholder="your mail"/>
                            </div>
                            <div className="col-6 p-2">
                                <input className="w-100 p-2 rounded" type="Number" placeholder="Number"/>
                            </div>
                            <div className="col-6 p-2">
                              <select className="w-100 p-2 rounded" id="cars">
                                <option value="flo">flo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>

                            <div className="col-12 p-2">
                            <textarea className="w-100 p-2 rounded" value="drop your comment" id="w3review" rows="10" />
                            </div>
                            
                        </div>
                        <button className="btn btn-warning text-white px-3 fs-4">Submit</button>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
            <iframe title="dfdf" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14352.49578747856!2d88.8519996!3d25.9311547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634589202931!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contact;