import { useContext } from "react";
import LanguageContext from '../../../Context/LanguageContext';

export const LanguageSelect = () => {
    const { handleLanguage } = useContext(LanguageContext);
    return (
        <select className="mobile-hidden" name="language" onChange={handleLanguage}>
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    );
}
