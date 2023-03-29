//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";

export const Serviceshome = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="container-services-home" id="s4">
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="bold-h2">{texts.titleHomeServices}</motion.h2>
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="section-text">{texts.textHomeServices}</motion.h2>
        </div>
    );
}

