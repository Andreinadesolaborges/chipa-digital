//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";
import { Downarrow } from "../../DownArrow/DownArrow";
//import img//
import chipa from '../../../img/chipa.png';

//import framer motion//
import { motion } from "framer-motion";

export const Section = () => {
    const {texts} = useContext(LanguageContext)
    return (
        <>
           <div className="section-home" id="s1">
               <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ ease: "easeOut", duration: 1}} className="section-text">{texts.sectionHome1}</motion.h2>
               <Downarrow id={"s2"}/>
            </div> 
            <div className="section-home-2" id="s2">
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1}} className="text-section-home">{texts.sectionHome2}</motion.h4>
                <div className="img-text-flex">
                    <div className="container-img-section">
                        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5}} className='section-home-img' src={chipa} alt="chipa" />    
                    </div>
                    <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ease: "easeOut", duration: 1}} className="text-section-home-2">{texts.sectionHome3}</motion.h4>
                </div>
            </div>
        </>
    );
}

