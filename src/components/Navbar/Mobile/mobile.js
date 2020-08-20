import React from 'react'
import './mobile.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../../assets/svg/inked.svg';

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className='navbar__mobile'>
            <div className='logo'>
                <Logo />
            </div>
            <button>
                {t('Saber mais')}
            </button>
        </nav>
    )
};