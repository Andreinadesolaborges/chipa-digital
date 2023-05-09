//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";

import fire from "../../../img/chipa-fire.webp"
import { Recipe } from "../Recipe/Recipe";

export const Manifest = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="about-container" id="about-1">
            <div className="about-margin">
            <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="about-text about-margin-text">{texts.aboutText}</motion.h6>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="line-100"></motion.div>
            </div>
            <div className="about-flexbox">
                <div className="about-img-container">
                    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} className="about-img" src={fire} alt="fire" />
                </div>
                <div className="about-manifest">
                    <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>{texts.aboutM1}</motion.h5>
                    <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>{texts.aboutM2}</motion.h5>
                    <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>{texts.aboutM3}</motion.h5>
                </div>
            </div>
            <Recipe/>
        </div>
    );
}

