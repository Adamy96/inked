import React from 'react'
import './emailInput.scss';
import { useTranslation } from 'react-i18next';

export default function EmailInput() {
    const { t } = useTranslation();

    return (
        <form className='email_input'>
            <input for="email" placeholder='seunome@email.com' />
            <label id="email" name="email">
                {t('Email')}
            </label>
            
            <button>
                {t('Saber mais')}
            </button>
        </form>
    )
}
