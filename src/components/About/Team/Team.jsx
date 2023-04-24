//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";

export const Team = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="team-container">
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="h1-big-outline">{texts.aboutTeamTitle}</motion.h1>
        </div>
    );
}