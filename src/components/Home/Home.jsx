import LanguageContext from '../../Context/LanguageContext';
import { useContext } from "react";
import { motion } from "framer-motion";
import planeta from '../../img/chipa-planet.png'
export const Home = () => {
    const {texts} = useContext(LanguageContext);
    return (
        <div>
            <div className="App">
                <div className='container'>
                    <div className='front-content'>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <img className='hero-img' src={planeta} alt="planeta" />
                        </motion.div>
                        <h1 className='color-a'>{texts.homeTitlel1}</h1>
                        <h1 className='color-b'>{texts.homeTitlel2}</h1>
                    </div>
                    <div className='semi-circle'></div>
                </div>
            </div>
        </div>
    );
}

