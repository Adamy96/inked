import React from "react";
import "./header.scss";
import { useTranslation } from 'react-i18next';
import EmailInput from '../EmailInput';
import StoreLinks from '../StoreLinks';
import useWindowSize from '../WindowCheck';
import PhoneMobile from '../../assets/images/phoneMobile.png';
import PhoneDesktop from '../../assets/images/phoneDesktop.png';

export default function Header() {
	const { t } = useTranslation();
	const isMobile = useWindowSize().width < 768;
	const Phone = isMobile ? PhoneMobile : PhoneDesktop;

	return (
		<div className="header">
			<div className='content'>

				{isMobile ? (
					<h1 className='title'>
						{t("Header.title")}
					</h1>
				) : (
					<h1 className='title'>
						<p>{t("Header.title1")}</p>
						<p>{t("Header.title2")}</p>
					</h1>
				)}

				<p className='description'>
					{t('Header.description')}
				</p>

				<EmailInput />
				<StoreLinks />
			</div>
			<div className='phone'>
				<img src={Phone} />
			</div>
		</div>
	);
}

