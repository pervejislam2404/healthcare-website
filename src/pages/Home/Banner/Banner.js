import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

import bannerOne from './banner-one.jpg'
import bannerTwo from './banner-two.jpg'
import bannerThree from './banner-three.jpg'

const Banner = () => {
    return (
        <div  className="banner-section overflow-hidden">
           <Carousel>
 
            <Carousel.Item  className="banner-section">
                <img               
                className="d-block w-100 banner-img"
                src={bannerOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-danger">Yoga For Everybody</h3>
                <button className="bg-warning px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="banner-section">
                <img               
                className="d-block w-100 banner-img"
                src={bannerTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-danger">Balance Your Life</h3>
                <button className="bg-warning px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="banner-section">
                <img
                className="d-block w-100 banner-img"
                src={bannerThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-danger">Harmonize Your Body</h3>
                <button className="bg-warning px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;