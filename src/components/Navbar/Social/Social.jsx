import instagram from '../../../img/instagram.svg';
import linkedin from '../../../img/linkedin.svg';
import tiktok from '../../../img/tiktok.svg';
import chat from '../../../img/wsp.svg';
import { motion } from "framer-motion";

export const Social = () => {
    return (
        <>
            <a href="https://www.instagram.com/chipadigital" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='social-icon'>
                    <img className='icon-s' src={instagram} alt="instagram" />
                </motion.div>
            </a>
            <a href="https://www.linkedin.com/chipa-digital" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='social-icon'>
                    <img className='icon-s' src={linkedin} alt="linkedin" />
                </motion.div>
            </a>
            <a href="https://www.tiktok.com/@chipadigital" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='social-icon'>
                    <img className='icon-s' src={tiktok} alt="tiktok" />
                </motion.div>
            </a>
            <a href="https://wa.me/353833150478" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='social-icon'>
                    <img className='icon-s' src={chat} alt="chat" />
                </motion.div>
            </a>

        </>
    );
}

