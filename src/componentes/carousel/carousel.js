import React from "react";
import 1 from '../../multimedia/logo2.png';
import 2 from '../../multimedia/logo2.png';
import {
    Carousel,
} from "react-bootstrap";

const Carousel = () =>{

    return(
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="../../multimedia/logo2.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="../../multimedia/logo2.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.venex.com.ar/products_images/1586464823_disc5.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousel;