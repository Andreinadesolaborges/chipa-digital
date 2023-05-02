//import language//
import LanguageContext from "../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";
import { Tabservices } from "./TabServices/TabServices";


export const Services = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div>
            <div className="App" id="top">
                <div className="container-services services-title">
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="h1-big-outline">{texts.servicesTitle}</motion.h1>
                    <Tabservices/>
                </div>
            </div>
        </div>
    );
}