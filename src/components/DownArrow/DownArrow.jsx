import { motion } from 'framer-motion';
import abajo from '../../img/chevron-down.svg';


export const Downarrow = ({id}) => {  

    const handleClickScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    return (
        <>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay:2}} viewport={{ once: true }} onClick={handleClickScroll}>
                <div className='icon-arrow'>
                    <img src={abajo} alt="abajo" />
                </div>
            </motion.div>
        </>
    );
}


