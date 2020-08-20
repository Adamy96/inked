import React from 'react'
import './storeLinks.scss';
import { useTranslation } from 'react-i18next';

export default function StoreLinks() {
    const { t } = useTranslation();

    return (
        <div className='store_links'>
            <p>
                {t('EM BREVE')}
            </p>
            <div className='container'>
                <a to='#' className='google-play'></a>
                <a to='#' className='app-store'></a>
            </div>
        </div>
    )
};