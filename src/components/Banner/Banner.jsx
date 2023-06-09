//import language//
import LanguageContext from "../../Context/LanguageContext";
import { useContext } from "react";

//import motion//
import { motion } from "framer-motion"

export const Banner = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="banner">
            <motion.h1 className="banner-text mobile-hidden" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} transition={{ ease: "easeOut", duration: 1}} 
            variants={{
                visible: {x: 0},
                hidden: { x: 500}
            }}>{texts.banner}</motion.h1>
               <motion.h1 className="banner-text mobile-show" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}
            >{texts.banner}</motion.h1>
        </div>
    );
}