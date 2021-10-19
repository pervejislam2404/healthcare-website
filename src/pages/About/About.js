import React from 'react';
import './About.css';


import phone from './phone.png';
import mail from './mail.png';
import calender from './calender.png'
import stomach from './stomach.png'
import round from './round.png'
import flower from './flower.png'

import galleryOne from './gallaery-one.jpg'
import galleryTwo from './gallery-two.jpg'
import galleryThree from './gallery-three.jpg'
import galleryFour from './gallery-four.jpg'
import galleryFive from './gallery-five.jpg'
import gallerySix from './gallery-six.jpg'
import gallerySeven from './gallery-seven.jpg'


const About = () => {
    return (
        <div className="about-bg">
             <div className="container-fluid top-banner mt-0 mb-0">
                 <div className="row">
                     <div className="col-12 col-md-6 col-lg-6 text-center pt-5">
                        <div className="container mt-5 px-5">
                            <h1 className="my-4 text-warning">Welcome to us</h1>
                            <p className="text-light fs-4">Is a green studio for holistic health and the arts. We offer classes for core strength, injury recovery and dance, including Zumba, Samba, Hip Hop and Ballet. We also open the space for art, performances and various workshops.</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img src={flower} alt="" />
                                <h3 className="text-warning">outstanding classes</h3>

                            </div>
                            <div className="col-4">
                                <img src={round} alt="" />
                                <h3 className="text-warning">Top Instructors</h3>

                            </div>
                            <div className="col-4">
                                <img src={stomach} alt="" />
                                <h3 className="text-warning">Best Amenities</h3>

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
               <h1 className="text-danger">About Studio</h1>
               <div className="img-bg py-3">
                   <img src="http://tantra.axiomthemes.com/wp-content/uploads/2017/04/om.png" alt="" />
                   <h1 className="text-danger">Our skills</h1>
                   <p className="text-warning fs-4">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.</p>
               </div>
               <div className="bg-white">
                   <img className="img-fluid" src="http://tantra.axiomthemes.com/wp-content/uploads/2017/04/hotspot.png" alt="" />
               </div>              
           </div>



            <div className="">
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



                    <div className="container mx-auto py-5"> 
                            <div className="text-center my-3 py-4">
                            <h1 className="text-danger">Our Gallery</h1>
                            </div>
                            <div className="row gallery">
                                <div className="p-2 gallery-item col-6 col-lg-4">
                                    <img className="img-fluid" src={galleryOne} alt="" />
                                </div>

                                <div className="p-2 gallery-item col-6 col-lg-4">
                                    <img className="img-fluid" src={galleryTwo} alt="" />
                                </div>

                                <div className="p-2 gallery-item col-6 col-lg-4">
                                <img className="img-fluid" src={galleryThree} alt="" />
                                </div>

                                <div className="p-2 gallery-item col-6 col-lg-8">
                                    <img className="img-fluid" src={galleryFive} alt="" />
                                </div>

                                <div className="p-2 gallery-item col-4 col-lg-4">
                                    <img className="img-fluid" src={galleryFour} alt="" />                            
                                </div>
                                            
                                <div className="p-2 gallery-item col-4 col-lg-4">
                                    <img className="img-fluid" src={gallerySeven} alt="" />                           
                                </div>

                                <div className="p-2 gallery-item col-4 col-lg-8 ">
                                    <img className="img-fluid" src={gallerySix} alt="" />
                                </div>
                            </div>
                    </div>                    

                </div>
            </div>
        </div>
    );
};

export default About;