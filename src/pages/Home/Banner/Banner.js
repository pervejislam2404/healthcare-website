import React from 'react';
import { Carousel } from 'react-bootstrap';

import bannerOne from './banner-one.jpg'
import bannerTwo from './banner-two.jpg'
import bannerThree from './banner-three.jpg'

const Banner = () => {
    return (
        <div>
           <Carousel>
  {/* slider */}

            <Carousel.Item className="">
                <img               
                className="d-block w-100"
                src={bannerOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-white">Yoga For Everybody</h3>
                <button className="bg-danger px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="">
                <img               
                className="d-block w-100"
                src={bannerTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-white">Balance Your Life</h3>
                <button className="bg-danger px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="">
                <img
                className="d-block w-100"
                src={bannerThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 style={{fontSize: '3rem'}} className="text-white">Harmonize Your Body</h3>
                <button className="bg-danger px-5 rounded border-0 py-3 my-4 text-white">MAKE AN APPOINTMENT</button>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;