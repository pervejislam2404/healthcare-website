import React from 'react';
import Banner from './Banner/Banner';
import yoga from './yoga.png';
import mad from './mad.png';
import phone from './phone.png';
import Services from '../Services/Services';
// import Instructors from './Instractor/Instructors';
import Article from './Extra/Article';
import Map from '../Contact/Map';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Article/>
            
            <div style={{backgroundColor: 'rgb(38,41,45)',color: 'white'}}>
                <div className="container row mx-auto py-4">
                    <div className="col-12 col-lg-4 text-center py-5">
                        <img src={yoga} alt="" />
                        <h4>WORLD CLASS TEACHERS</h4>
                        <p>Experience the depth of knowledge from experts across all areas of yoga.</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center py-5">
                        <img src={mad} alt="" />
                        <h4>STAY INSPIRED</h4>
                        <p>Explore hundreds of classes & member-only courses,with new content added da8ily.</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center py-5">
                        <img src={phone} alt="" />
                        <h4>EVERYWHERE YOU ARE</h4>
                        <p>Take classes at your own pace, on your own time , and on any device.</p>
                    </div>
                </div>
            </div>

        <Map/>
        </div>
        
    );
};

export default Home;