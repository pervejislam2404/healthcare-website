import React from 'react';
import coverOne from './cover-one.jpg';
import coverTwo from './cover-two.jpg';
import Instructors from '../Instractor/Instructors';

const Article = () => {
    return (
        <div>
            <div className="overflow-hidden">
                <div style={{position: 'relative'}} className="row">
                    <img height="700" src={coverOne} alt="" />
                    <div style={{position: 'absolute',top: '50%' ,left: '50%', transform:'translate(-50%,-50%)'}} className="inner w-50 row mx-auto">
                        <div className="col-12 col-lg-6 bg-white p-4 shadow-lg fs-5">
                            <h1>The inner middle</h1>
                            <p>“Yoga resets my inner peace barometer”: A qualitative study illuminating the pathways of how yoga impacts one’s relationship to oneself and to others</p>
                        </div>
                        <div className="col-12 col-lg-6"></div>
                    </div>
                </div>


                <Instructors/>


                <div style={{position: 'relative'}} className="row">
                    <img height="700" src={coverTwo} alt="" />
                    <div style={{position: 'absolute',top: '50%' ,left: '50%', transform:'translate(-50%,-50%)'}} className="inner w-50 row mx-auto">
                        <div className="col-12 col-lg-6"></div>
                        <div className="col-12 col-lg-6 bg-white p-4 shadow-lg fs-5">
                            <h1>Mind in balance</h1>
                            <p>Most people perceive yoga to be a physical exercise which grants us with numerous healing benefits such as - pliancy, strength, balance, perfect posture, etc. However, don’t be surprised to find out that the science of yoga</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;