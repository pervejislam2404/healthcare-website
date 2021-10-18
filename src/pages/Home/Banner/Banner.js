import React from 'react';
import { Carousel } from 'react-bootstrap';

import bannerOne from './banner-one.jpg'
import bannerTwo from './banner-two.jpg'
import bannerThree from './banner-three.jpg'

const Banner = () => {
    return (
        <div>
           <Carousel>

            <Carousel.Item style={{height: '60vh'}} className="">
                <img
               
                className="d-block w-100"
                src={bannerOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-black">First slide label</h3>
                <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{height: '60vh'}} className="">
                <img
               
                className="d-block w-100"
                src={bannerTwo}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="text-black">Second slide label</h3>
                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{height: '60vh'}} className="">
                <img
                className="d-block w-100"
                src={bannerThree}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-black">Third slide label</h3>
                <p className="text-black">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;