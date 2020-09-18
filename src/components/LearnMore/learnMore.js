import React from "react";
import EmailInput from "../EmailInput";
import StoreLinks from "../StoreLinks";
import { useTranslation } from "react-i18next";
import useWindowSize from "../WindowCheck";
import "./learnMore.scss";

export default function LearnMore() {
	const { t } = useTranslation();
	const isMobile = useWindowSize().width < 768;
	const title = isMobile
		? t("LearnMore.titleMobile")
		: t("LearnMore.titleDesktop");

	return (
		<div className='learnMore'>
			<p className='subtitle'>{t("Saiba mais")}</p>
			<h3 className='title'>{title}</h3>
			<p className='description'>
				{t("LearnMore.description")}
			</p>
			<EmailInput />
			<StoreLinks />
			<p className='copyright'>
				Copyright 2018 All rights reserved — Designed by Daniel Korpai
			</p>
		</div>
	);
}
