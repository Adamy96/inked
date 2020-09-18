import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../../assets/svg/inked.svg';
import './desktop.scss';

export default function Desktop() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('pt');

    const handleClick = async (language) => {
        await setSelectedLanguage(language);
        i18n.changeLanguage(language);
    }

    return (
        <nav className='navbar__desktop'>
            <div className='navbar__desktop--content'>
                <div className='logo' onClick={() => document.getElementById('root').scrollIntoView({behavior: 'smooth'})}>
                    <Logo />
                </div>
                <ul>
                    <li>
                        <button onClick={() => document.getElementsByClassName('features')[0].scrollIntoView({behavior: 'smooth'})}>
                            {t('Navbar.funcionalidades')}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementsByClassName('community')[0].scrollIntoView({behavior: 'smooth'})}>
                            {t('Navbar.comunidade')}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementsByClassName('learnMore')[0].scrollIntoView({behavior: 'smooth'})}>
                            {t('Navbar.saibaMais')}
                        </button>
                    </li>
                    <li className={`translation ${selectedLanguage}`}>
                        <button onClick={() => handleClick('pt')}>
                            {t('PT')}
                        </button>
                        <span>/</span>
                        <button onClick={() => handleClick('en')}>
                            {t('EN')}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
};