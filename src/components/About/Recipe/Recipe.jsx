//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";

//import imgs//
import bullet1 from "../../../img/1-bullet.svg";
import bullet2 from "../../../img/2-bullet.svg";
import bullet3 from "../../../img/3-bullet.svg";
import bullet4 from "../../../img/4-bullet.svg";
import bullet5 from "../../../img/5-bullet.svg";

//import link//
import { Link } from 'react-router-dom';

export const Recipe = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="chipa-recipe">
            <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="recipe-text">{texts.recipeTitle}</motion.h6>
            <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="recipe-text-w">{texts.recipeStart}</motion.h6>
            <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="list-ingredients">
                <li className="recipe-ingredient">{texts.recipeI1}</li>
                <li className="recipe-ingredient">{texts.recipeI2}</li>
                <li className="recipe-ingredient">{texts.recipeI3}</li>
                <li className="recipe-ingredient">{texts.recipeI4}</li>
                <li className="recipe-ingredient">{texts.recipeI5}</li>
            </motion.ul>
            <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="recipe-text-w">{texts.prepTitle}</motion.h6>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="prep-container">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} src={bullet1} alt="1" />
                <p className="prep-text">{texts.prep1}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="prep-container">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} src={bullet2} alt="2" />
                <p className="prep-text">{texts.prep2}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="prep-container">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} src={bullet3} alt="3" />
                <p className="prep-text">{texts.prep3}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="prep-container">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} src={bullet4} alt="4" />
                <p className="prep-text">{texts.prep4}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="prep-container">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} src={bullet5} alt="5" />
                <p className="prep-text">{texts.prep5}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="about-flex-cta">
                <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="about-text about-cta-margin">{texts.aboutCTA}</motion.h6>
                <Link to={"/contact"}><motion.button className="yellow" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}> <span>{texts.ctaHome}</span></motion.button></Link>
            </motion.div>

        </div>

    );
}


