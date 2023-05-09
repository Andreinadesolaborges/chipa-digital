//import language//
import LanguageContext from "../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";
import chipadigital from "../../img/chipa-digital.svg";
import { Downarrow } from "../DownArrow/DownArrow";
import chipaplane from "../../img/chipa-plane.png"
import { Social } from "../Navbar/Social/Social";
import { ContactForm } from "./ContactForm/ContactForm";


export const Contact = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div>
            <div className="App" id="top">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}   className="container-contact contact-title">
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="h1-big-outline">{texts.contactTitle}</motion.h1>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}  className="chipa-title" src={chipadigital} alt="chipadigital" />
                    <Downarrow id={"contact"} color="white" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}  className="container-contact-form" id="contact">
                    <div className="flex-contact">
                        <div className="contact-info">
                            <img className="contact-img" src={chipaplane} alt="chipa-plane" />
                            <h6 className="contact-text">{texts.contactCTA}</h6>
                            <a className="contact-mail" href="mailto:info@chipadigital.com">info@chipadigital.com</a>
                            <div className="social-text-wrapper no-padding">
                                <Social />
                            </div>
                        </div>
                        <div className="contact-form">
                        <ContactForm/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}