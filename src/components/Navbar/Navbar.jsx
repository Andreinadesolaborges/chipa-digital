import logo from '../../img/logo.svg';
import menu from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    console.log(navOpen);
    return (
        <>
            <div className="nav">
                <div className="navbar">
                    <Link to={"/"} onClick={() => navOpen && setNavOpen(false)}> <img className="margin-navbar logo" src={logo} alt="logo" /></Link>
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <div className={`margin-navbar menu-container ${navOpen ? 'm-open' : 'm-close'}`}>
                            <img className="menu" src={navOpen ? `${close}` : `${menu}`} alt="menu" />
                        </div>
                    </div>
                </div>
                <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    background: navOpen ? "#FECC3F" : "none",
                    transitionDelay: navOpen ? "0s" : "0s"
                }}>
                    <div className="container-secciones">
                        <ul>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/"}><li>Home</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/about"}><li>Nosotros</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/services"}><li>Servicios</li></Link>
                            <Link onClick={() => setNavOpen(!navOpen)} to={"/contact"}><li>Contacto</li></Link>
                         
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


