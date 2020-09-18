import React from 'react'
import data1 from './data/data1';
import Slider from "react-slick";
import useWindowSize from '../WindowCheck';
import './carousel.scss';

export default function Carousel() {
    const pageWidth = useWindowSize().width;
    const getSlidesNumber = (pageWidth) => {
        if (pageWidth < 768) return 1;
        if (pageWidth < 1440) return 4;
        if (pageWidth < 1440) return 6;
        if (pageWidth >= 1920) return 7;
        return 5;
    }
    
    const slidesToShow = getSlidesNumber(pageWidth);
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        centerMode: true,
        className: 'carousel'
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings} >
                {data1.map((slide) => {
                    return (
                        <img src={slide.image} className='slide' />
                    )
                })}
            </Slider>
        </div>
        
    );
}
