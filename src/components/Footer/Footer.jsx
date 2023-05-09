import {useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Social } from '../Navbar/Social/Social';
import LanguageContext from '../../Context/LanguageContext';
import { LanguageSelect } from '../Navbar/LanguageSelect/LanguageSelect';
import Uparrow from '../UpArrow/UpArrow';

export const Footer = () => {

    const { texts } = useContext(LanguageContext);

    return (
        <>
        <footer>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="footer">
            <div className="cta-footer">
                <h2 className="bold">{texts.menuCTA}</h2>
                <Link to={"/contact"}><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ ease: "easeOut", duration: 1 }} className="tab-content-btn no-border"> <span>{texts.ctaFooter}</span></motion.button></Link>
            </div>
            <div className="links-footer">
                <ul className="footer-list">
                    <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: .4 }} viewport={{ once: true }} className="footer-list-element"><Link to={"/"}> {texts.menuCat1}</Link></motion.li> 
                    <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: .4, delay: .4 }} viewport={{ once: true }} className="footer-list-element"><Link to={"/about"}>{texts.menuCat2}</Link></motion.li>
                   <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: .4, delay: .8 }} viewport={{ once: true }} className="footer-list-element"> <Link to={"/services"}>{texts.menuCat3}</Link></motion.li>
                    <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: .4, delay: 1.2 }} viewport={{ once: true }} className="footer-list-element"><Link to={"/contact"}>{texts.menuCat4}</Link></motion.li>
                </ul>
            </div>
            <div className="footer-social-container"> 
            <div className="social-text-wrapper no-padding">
            <Social />
            </div>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ ease: "easeOut", duration: 1 }} href="mailto:info@chipadigital.com"><h4>info@chipadigital.com</h4></motion.a>
            </div>
            <div className="arrow-wrapper">
                <Uparrow id={"top"} color="white"/>
            </div>
            <h6>2023 © Chipa digital agency </h6>
            <LanguageSelect />
        </motion.div>
        </footer>
        </>
    );
}


