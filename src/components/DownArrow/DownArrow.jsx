import { motion } from 'framer-motion';
import abajo from '../../img/chevron-down.svg';
export const Downarrow = () => {
    return (
        <>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay:2}} viewport={{ once: true }}>
                <div className='icon-arrow'>
                    <img src={abajo} alt="abajo" />
                </div>
            </motion.div>
        </>
    );
}


