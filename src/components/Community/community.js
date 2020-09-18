import React from "react";
import { useTranslation } from "react-i18next";
import ReviewCards from './ReviewCards';
import './community.scss';

export default function Community() {
	const { t } = useTranslation();

	return (
		<div className='community'>
			<div className='content'>
				<p className='subtitle'>{t("Community.subtitle")}</p>
				<h3 className='title'>
					<span>{t("Community.title1")}</span>
					<span>{t("Community.title2")}</span>
				</h3>
				<p className='description'>
					{t("Community.description")}
				</p>
			</div>

            <div className='cards-container'>
				<ReviewCards />
            </div>
		</div>
	);
}
