import { createContext } from "react";
import { useState } from "react";
import { translations } from "../components/data/translations.jsx";

const LanguageContext = createContext();

const initialLanguage = "es";


const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);


    const handleLanguage = (e) => {
        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        }
        else {
            setLanguage("en");
            setTexts(translations.en);
        }
    };

    const data = { texts, handleLanguage };

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageProvider };
export default LanguageContext;