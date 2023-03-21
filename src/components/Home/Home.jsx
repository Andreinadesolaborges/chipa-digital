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
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{y:15}} initial={{opacity:0}} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5}} viewport={{ once: true }}>
                        <img className='hero-img' src={planeta} alt="planeta" />
                        </motion.div>
                        <motion.h1 animate={{y:15}} initial={{opacity:0}} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5}} viewport={{ once: true }} className='color-a'>{texts.homeTitlel1}</motion.h1>
                        <motion.h1 animate={{y:15}} initial={{opacity:0}} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 1}} viewport={{ once: true }} className='color-b'>{texts.homeTitlel2}</motion.h1>
                    </div>
                    <div className='semi-circle'></div>
                </div>
            </div>
        </div>
    );
}

