import logo from '../../img/logo.svg';
import logoNav from '../../img/logo-nav.svg';
import menu from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Social } from './Social/Social';
import LanguageContext from '../../Context/LanguageContext';
import { LanguageSelect } from './LanguageSelect/LanguageSelect';


export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { texts} = useContext(LanguageContext);

    return (
        <>
            <div className="nav">
                <div className="navbar">
                    <Link to={"/"} onClick={() => navOpen && setNavOpen(false)}> <img className="margin-navbar logo" src={navOpen ? `${logoNav}` : `${logo}`} alt="logo" /></Link>
                    <div className='container-nav-r'>
                        <LanguageSelect/>
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={`margin-navbar menu-container ${navOpen ? 'm-open' : 'm-close'}`}>
                                <img className="menu" src={navOpen ? `${close}` : `${menu}`} alt="menu" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    opacity: navOpen ? "100%" : "0",
                    background: navOpen ? "#FECC3F" : "#FECC3F",
                    transitionDelay: navOpen ? "0s" : "0s"
                }}>
                    <div className="container-secciones">
                        <ul>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/"}> <li>{texts.menuCat1}</li> </Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/about"}><li>{texts.menuCat2}</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/services"}><li>{texts.menuCat3}</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/contact"}><li>{texts.menuCat4}</li></Link>
                        </ul>
                    </div>
                    <Social />
                </div>
            </div>
        </>
    );
}


