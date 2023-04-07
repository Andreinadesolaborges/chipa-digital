
import { useContext } from "react";
import LanguageContext from '../../../Context/LanguageContext';
import { Social } from "../Social/Social";

export const SocialContainer = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="container-social">
            <div className='social-text-wrapper'>
                <h6>{texts.menuCTA}</h6>
            </div>
            <div className="social-icons-wrapper">
                <Social />
            </div>
        </div>
    );
}

