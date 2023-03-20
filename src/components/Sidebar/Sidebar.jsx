import { useContext } from "react";
import LanguageContext from '../../Context/LanguageContext';
import chat from '../../img/wsp.svg'
import { motion } from "framer-motion";

export const Sidebar = () => {
    const {texts} = useContext(LanguageContext);
    return (
        <div className="sidebar">
            <p className="sidebar-text mobile-hidden">{texts.sidebarText}</p>
            <a  className="sidebar-btn" href="https://wa.me/54911XXXXXXXX" target="_blank" rel="noreferrer">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="social-icon chat-btn">
                        <img className='icon-s' src={chat} alt="chat" />
                    </motion.div>
            </a>
        </div>
    );
}


