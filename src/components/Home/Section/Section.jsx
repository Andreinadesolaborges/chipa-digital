//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import component//
import { Downarrow } from "../../DownArrow/DownArrow";

//import img//
import chipa from '../../../img/chipa.png';

//import framer motion//
import { motion } from "framer-motion";

//import link//
import { Link } from 'react-router-dom';

export const Section = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <>
            <div className="section-home" id="s1">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="section-text">{texts.sectionHome1}</motion.h2>
                <Downarrow id={"s2"} />
            </div>
            <div className="section-home-2" id="s2">
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="text-section-home">{texts.sectionHome2}</motion.h4>
                <div className="img-text-flex">
                    <div className="container-img-section">
                        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.3}} className="section-home-img" src={chipa} alt="chipa" />
                    </div>
                    <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="text-section-home-2">{texts.sectionHome3}</motion.h4>
                </div>
                <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="check-list">
                    <li><span className="check">✓</span> {texts.sectionHome4l1}</li>
                    <li><span className="check">✓</span> {texts.sectionHome4l2}</li>
                    <li><span className="check">✓</span> {texts.sectionHome4l3}</li>
                </motion.ul>
                <Downarrow id={"s3"} color="white"/>
            </div>
            <div className="section-home-3" id="s3">
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="text-section-home-3">{texts.sectionHome4}</motion.h4>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="bold-h2">{texts.sectionHome5}</motion.h2>
                <Link to={"/contact"}><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}> <span>{texts.ctaHome}</span></motion.button></Link>
                <Downarrow id={"s4"} color="white"/>
            </div>
        </>
    );
}

