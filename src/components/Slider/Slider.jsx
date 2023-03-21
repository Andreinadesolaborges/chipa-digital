// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles//
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

//import framer motion//
import { motion } from "framer-motion";

//import images//
import planeta from '../../img/chipa-planet.png';
import bombillo from '../../img/chipa-bulb.png';
import gato from '../../img/chipa-cat.png';

//import language//
import LanguageContext from "../../Context/LanguageContext";
import { useContext } from "react";

export const Slider = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} viewport={{ once: true }}>
                    <img className='hero-img' src={planeta} alt="planeta" />
                </motion.div>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className='color-a'>{texts.homeTitlel1}</motion.h1>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 1 }} viewport={{ once: true }} className='color-b'>{texts.homeTitlel2}</motion.h1>
            </SwiperSlide>
            <SwiperSlide>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} viewport={{ once: true }}>
                    <img className='hero-img' src={bombillo} alt="bombillo" />
                </motion.div>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className='color-a'>{texts.homeTitlel3}</motion.h1>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 1 }} viewport={{ once: true }} className='color-b'>{texts.homeTitlel4}</motion.h1>
            </SwiperSlide>
            <SwiperSlide>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} viewport={{ once: true }}>
                    <img className='hero-img' src={gato} alt="gato" />
                </motion.div>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className='color-a'>{texts.homeTitlel5}</motion.h1>
                <motion.h1 animate={{ y: 15 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 1 }} viewport={{ once: true }} className='color-b'>{texts.homeTitlel6}</motion.h1>
            </SwiperSlide>
        </Swiper>
    );
}


