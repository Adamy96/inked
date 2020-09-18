import React from 'react'
import dataMobile from '../Mobile/data/dataMobile';
import dataTablet1 from './data/dataTablet1';
import dataTablet2 from './data/dataTablet2';
import ReviewCard from '../../ReviewCard';
import './reviewCards.scss';
import useWindowSize from '../../../WindowCheck';
import Slider from "react-slick";

export default function ReviewCardsTablet() {
    const isDesktop = useWindowSize().width > 1023;

    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        className: 'carousel'
    };

    const data = isDesktop ? dataTablet1 : dataMobile;

    return (
        <div className='reviewCards_tablet'>
            <Slider {...settings} className='slider1'>
                {data.map((card) => {
                    return (
                        <ReviewCard data={card} />
                    )
                })}
            </Slider>

            {isDesktop && (
                <Slider {...settings} className='slider2'>
                    {dataTablet2.map((card) => {
                        return (
                            <ReviewCard data={card} className='reviewCards_mobile' />
                        )
                    })}
                </Slider>
            )}
        </div>
    )
}
