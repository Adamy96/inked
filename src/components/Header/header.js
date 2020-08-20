import React from "react";
import "./header.scss";
import { useTranslation } from 'react-i18next';
import EmailInput from '../EmailInput';
import StoreLinks from '../StoreLinks';

export default function Header() {
	const { t } = useTranslation();

	return (
		<div className="header">
			<h1 className='title'>
                {t("Finalmente, o app do tatuador")}
            </h1>

			<p className='description'>
				Com o Inked você tem o controle. Faça seus orçamentos com mais
				facilidade, agilidade e ainda permita que seus clientes
				encontrem uma data, dentro da sua agenda
			</p>

            <EmailInput />
			<StoreLinks />
		</div>
	);
}
