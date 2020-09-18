import React from 'react';
import dataMobile from './data/dataMobile';
import ReviewCard from '../../ReviewCard';
import './reviewCards.scss';
import Slider from "react-slick";

export default function ReviewCardsMobile() {
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'carousel'
    };

    return (
        <div className='reviewCards_mobile'>
            <Slider {...settings} >
                {dataMobile.map((card) => {
                    return (
                        <ReviewCard data={card} />
                    )
                })}
            </Slider>
        </div>
    )
}
