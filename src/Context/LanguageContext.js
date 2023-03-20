import { createContext } from "react";
import { useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
    es: {
        menuCat1: "Inicio",
        menuCat2: "Nosotros",
        menuCat3: "Servicios",
        menuCat4: "Contacto",
        menuCTA: "¿qué esperas para hornear tus ideas?",
        homeTitlel1: "¡Llevamos estrategias",
        homeTitlel2: "creativas a la acción!",
        sidebarText: "Agencia boutique de diseño web, marketing digital y redes sociales."
    },
    en: {
        menuCat1: "Home",
        menuCat2: "About",
        menuCat3: "Services",
        menuCat4: "Contact",
        menuCTA: "Start baking your ideas!",
        homeTitlel1: "We bring creative ",
        homeTitlel2: "strategies into action!",
        sidebarText: "Boutique agency of web design, digital marketing, and social media."
    },
};

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