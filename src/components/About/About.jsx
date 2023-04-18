//import language//
import LanguageContext from "../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";

//import Component
import { Downarrow } from "../DownArrow/DownArrow";
import { Manifest } from "./Manifest/Manifest";


export const About = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div>
            <div className="App" id="top">
                <div className="container about-title">
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="h1-big-outline">{texts.aboutTitle}</motion.h1>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="mini-container">
                        <div className="line"></div>
                        <h6 className="mini-sub">{texts.aboutMiniSub}</h6>
                        <div className="line mobile-show"></div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}className="subtile-container">
                    <h1 className="about-subtitle">{texts.aboutSubtitle}</h1>
                    <Downarrow id={"about-1"} color="black"/>
                    </motion.div>
                </div>
                <Manifest/>
            </div>
        </div>
    );
}