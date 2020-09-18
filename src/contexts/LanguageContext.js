import React, { useState, useContext } from "react";

export const LanguageContext = useContext();

const LanguageProvider = ({ children }) => {
	const Index = () => {
        const [language, setLanguage] = useState("PT");
        
        return (
            <LanguageContext.Provider value={language, setLanguage}>
                {children}
            </LanguageContext.Provider>
        );
	};
};

export default LanguageProvider;
