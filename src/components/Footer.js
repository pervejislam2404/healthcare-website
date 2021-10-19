import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="py-5 bg-light">
                <div className="container row mx-auto">
                    <div className="col-12 col-lg-3 p-3">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymYPgMB_bzEEkAjvX-5_ECLLNCwUTYNElOQ&usqp=CAU" alt="" />
                    </div>
                    <div className="col-12 col-lg-3 p-3">
                        <h3>CONTACT</h3>
                        <p>If you have any feedback or questions do not hesitate to contact us</p>
                        <p><i className="fas fa-map-marker-alt p-2 fs-4"></i>YogaX Fitness 1192 Wellington St.
                         72651 Wellington, North Dakota</p>
                        <p><i className="fas fa-phone-volume fs-4 p-2"></i>0800 99911122</p>
                        <p><i className="fas fa-fax fs-4 p-2"></i> 0800 999111223</p>
                        <p><i className="fas fa-envelope-open-text p-2 fs-4"></i>info@themetwins.com</p>

                    </div>
                    <div className="col-12 col-lg-3 p-3">
                    <h3>SUPPORT</h3>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Our courses</li>
                            <li>Workouts</li>
                            <li>Membership</li>
                            <li>Products</li>
                            <li>Contact</li>
                        </ul>

                    </div>
                    <div className="col-12 col-lg-3 p-3">
                        <h3>OPENING HOURS</h3>
                     <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Monday</th>
                                <th scope="col">07:00-17:00</th>                            
                            </tr>
                        </thead>
                            <tbody className="border-0">
                                <tr>
                                    <td>Tuesday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                                <tr>
                                    
                                    <td>Wednesday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                                <tr>
                                    
                                    <td>Saturday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>07:00-17:00</td>
                                </tr>
                               
                            </tbody>
                            </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;