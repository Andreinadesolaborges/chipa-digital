import logo from '../../img/logo.svg';
import logoNav from '../../img/logo-nav.svg';
import menu from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Social } from './Social/Social';

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className="nav">
                <div className="navbar">
                    <Link to={"/"} onClick={() => navOpen && setNavOpen(false)}> <img className="margin-navbar logo" src={navOpen ? `${logoNav}` : `${logo}`} alt="logo" /></Link>
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={`margin-navbar menu-container ${navOpen ? 'm-open' : 'm-close'}`}>
                            <img className="menu" src={navOpen ? `${close}` : `${menu}`} alt="menu" />
                        </motion.div>
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
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/"}> <li>Home</li> </Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/about"}><li>Nosotros</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/services"}><li>Servicios</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/contact"}><li>Contacto</li></Link>
                        </ul>
                    </div>
                    <Social/>
                </div>
            </div>
        </>
    );
}


