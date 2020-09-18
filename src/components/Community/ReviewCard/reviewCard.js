import React from 'react';
import './reviewCard.scss';
import { useTranslation } from "react-i18next";
import { ReactComponent as TwitterSVG } from '../../../assets/svg/twitter.svg';

export default function ReviewCard({ data }) {
    const { t } = useTranslation();

    return (
        <div className='reviewCard'>
            <div className='row'>
                <div>
                    <img src={data.image} />
                    <span className='name'>{data.name}</span>
                </div>
                <TwitterSVG />
            </div>
            <p className='reviewCard_text'>{t(data.text)}</p>
            <p className='reviewCard_date'>{data.date}</p>
        </div>
    )
}
