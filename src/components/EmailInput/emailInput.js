import React, { useState, useEffect } from "react";
import "./emailInput.scss";
import { useTranslation } from "react-i18next";
import fetch from 'isomorphic-fetch';

export default function EmailInput() {
	const { t } = useTranslation();
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		fetch(
			`https://api.sheetson.com/v2/sheets/${process.env.REACT_APP_SPREADSHEET_NAME}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
					"X-Spreadsheet-Id": `${process.env.REACT_APP_SPREADSHEET_ID}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email }),
			}
		)
			.then((result) => {
				console.log(result);
				setLoading(false);
			});
	};

	return (
		<form className='email_input'>
			<input
				htmlFor='email'
				placeholder={t("EmailInput.placeholder")}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label id='email' name='email'>
				{t("EmailInput.label")}
			</label>

			<button onClick={(e) => handleSubmit(e)}>
				{t("EmailInput.button")}
			</button>
		</form>
	);
}
