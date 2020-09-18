import React from 'react';
import './features.scss';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../WindowCheck';
import cardsData from './cardsData';

export default function Features() {
    const { t } = useTranslation();
    const isMobile = useWindowSize().width < 768;
    
	return (
		<div className='features'>
			<p className='subtitle'>{t('Features.subtitle')}</p>
            <h3 className='title'>
                {isMobile ? t('Features.titleMobile') : (
                    <>
                        <span>{t('Features.titleDesktop1')}</span>
                        <span>{t('Features.titleDesktop2')}</span>
                    </>
                )}
            </h3>
            <div className='description'>
                <p>
                    {t('Features.description1')}
                </p>
                <p>
                    {t('Features.description2')}
                </p>
            </div>
            <div className='cards_container'>
                {cardsData().map(card => {
                    return (
                        <div className='card'>
                            <div className='img_container'>
                                <img src={card.image} />
                            </div>
                            <p className='card__title'>
                                {t(card.title)}
                            </p>
                            <p className='card__text'>
                                {t(card.text)}
                            </p>
                        </div>
                    )
                })}
            </div>
		</div>
	);
}