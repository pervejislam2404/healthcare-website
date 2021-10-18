import React from 'react';
import phone from './phone.png';
import mail from './mail.png';
import calender from './calender.png'
import stomach from './stomach.png'
import round from './round.png'
import flower from './flower.png'


const About = () => {
    return (
        <div>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-12 col-md-6 col-lg-6 text-center pt-5">
                        <div className="container mt-5 px-5">
                            <h1 className="my-4">Welcome to us</h1>
                            <p>Is a green studio for holistic health and the arts. We offer classes for core strength, injury recovery and dance, including Zumba, Samba, Hip Hop and Ballet. We also open the space for art, performances and various workshops.</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img src={flower} alt="" />
                                <h3 className="text-">outstanding classes</h3>

                            </div>
                            <div className="col-4">
                                <img src={round} alt="" />
                                <h3>Top Instructors</h3>

                            </div>
                            <div className="col-4">
                                <img src={stomach} alt="" />
                                <h3>Best Amenities</h3>

                            </div>
                        </div>
                        <button className="border-0 bg-danger py-3 px-4 text-white rounded mt-5 mb-2">MAKE AN APPOINTMENT</button>
                     </div>
                     <div className="col-12 col-md-6 col-lg-6">
                         <img className="img-fluid" src="https://www.healthifyme.com/blog/wp-content/uploads/2019/08/Yoga-Weight-Loss-Feature-Image1.jpg" alt="" />

                     </div>
                 </div>
             </div>
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
            <div className="my-5">

               <div className="container row mx-auto">

                    <div className="col-12 col-md-4 col-lg-4 py-5">
                          <div className="card mb-3 border-0 p-4 shadow-lg">
                             <div className="row g-0">
                                <div className="col-12 col-md-4 col-lg-4">
                                     <img src={phone} height="100" width="100" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-12 col-md-8 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-danger">+86425786424314</h5>
                                        <p className="card-text">Hotline available 24 hours</p>
                                    
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>


                   <div className="col-12 col-md-4 col-lg-4 py-5">
                          <div className="card mb-3 border-0 p-4 shadow-lg">
                             <div className="row g-0">
                                <div className="col-12 col-md-4 col-lg-4">
                                     <img src={mail} height="100" width="100" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-12 col-md-8 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-danger">E-MAIL US</h5>
                                        <p className="card-text">Response within 48 hours</p>
                                    
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>


                    <div className="col-12 col-md-4 col-lg-4 py-5">
                          <div className="card mb-3 border-0 p-4 shadow-lg">
                             <div className="row g-0">
                                <div className="col-12 col-md-4 col-lg-4">
                                     <img src={calender} height="100" width="100" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-12 col-md-8 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-danger">1192 Wellington St.</h5>
                                        <p className="card-text">72651 Wellington,Dakota</p>
                                    
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;