import { motion } from 'framer-motion';
import arriba from '../../img/chevron-up.svg';


export const Uparrow = ({id, color}) => {
    const handleClickScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    return (
        <>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay:0.5}} viewport={{ once: true }} onClick={handleClickScroll}>
                <div className={`icon-arrow ${color==="white" ? 'white-bg' : 'lila-bg'}`}>
                    <img src={arriba} alt="arriba" />
                </div>
            </motion.div>
        </>
    );
}

export default Uparrow;
