import React from 'react'
import './storeLinks.scss';
import { useTranslation } from 'react-i18next';

export default function StoreLinks() {
    const { t } = useTranslation();

    return (
        <div className='store_links'>
            <div className='left-side'>
                <p>
                    {t('StoreLinks.text')}
                </p>
                <div className='container'>
                    <a href='#' className='google-play'></a>
                    <a href='#' className='app-store'></a>
                </div>
            </div>
            <div className='right-side'>
                <p>
                    INSTAGRAM
                </p>
            </div>
        </div>
    )
};