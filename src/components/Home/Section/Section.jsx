//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import motion//
import { motion } from "framer-motion"

export const Section = () => {
    const {texts} = useContext(LanguageContext)
    return (
        <>
           <div className="section-home" id="s1">
               <h2 className="section-text">{texts.sectionHome1}</h2>
            </div> 
        </>
    );
}

