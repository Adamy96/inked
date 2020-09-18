import React from "react";
import data from './data/data';
import { useTranslation } from "react-i18next";
import useWindowSize from "../WindowCheck";
import PhoneMobile from '../../assets/images/phoneMobile.png';
import Calendar from '../../assets/images/Calendar.png';
import './ourTools.scss';

export default function OurTools() {
    const { t } = useTranslation();
    const isMobile = useWindowSize().width < 768;

	return (
		<div className='ourTools'>
            <div className='left-side'>
                <h3 className='title'>
                    <span>{t("OurTools.title1")}</span>
                    <span>{t("OurTools.title2")}</span>
                </h3>
                <p className='description'>
                    <span>{t("OurTools.description1")}</span>
                    <span>{t("OurTools.description2")}</span>
                </p>

                <div className='container'>
                    {data().map(item => {
                        return (
                            <div className='row'>
                                <img src={item.image} />
                                <p>
                                    {t(`${item.text}`)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='right-side'>
                {!isMobile && <img src={Calendar} className='img_calendar'/>}
                <img src={PhoneMobile} className='img_phone' />
            </div>
		</div>
	);
}