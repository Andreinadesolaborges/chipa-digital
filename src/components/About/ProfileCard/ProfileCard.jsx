//import framer motion//
import { motion } from "framer-motion";

import email from "../../../img/mail.svg";
import linkedin from "../../../img/linkedin.svg";

export const Profilecard = ({ img, alt, name, job, mail, link, ig }) => {
    return (
        <>
            <motion.div  whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5}} className="card-container">
                <img className="img-card" src={img} alt={alt} />
                <h2 className="card-text">{name}</h2>
                <h4 className="card-job">{job}</h4>
                <div className="card-social">
                    <motion.div whileHover={{ scale: 1.1 }} className="round-cicle">
                         <a href={mail}><img className="icon-s" src={email} alt="mail icon"/></a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="round-cicle">
                         <a href={link} target="_blank" rel="noreferrer"><img className="icon-s" src={linkedin} alt="linkedin icon"/></a>
                    </motion.div>
                    
                </div>
            </motion.div>

        </>
    );
}


