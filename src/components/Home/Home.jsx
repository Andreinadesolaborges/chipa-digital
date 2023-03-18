import LanguageContext from '../../Context/LanguageContext';
import { useContext } from "react";
export const Home = () => {
    const {texts} = useContext(LanguageContext);
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <h1 className='color-a'>{texts.homeTitlel1}</h1>
                    <h1 className='color-b'>{texts.homeTitlel2}</h1>
                </div>
            </div>
        </div>
    );
}

