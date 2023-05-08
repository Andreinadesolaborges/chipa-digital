import { motion } from "framer-motion";

//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

export const ContactForm = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <>
            <form className="flex-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" defaultValue="b3c5a239-8bc4-42b4-ac7e-8e04254eba36" />
                <h2 className="bold text-contact">{texts.contactFormTitle}</h2>
                <label for="name" className="">{texts.contactForm1}</label>
                <input className="input-style" type="text" name="name" placeholder="John Doe" required/>
                <label for="email" className="">Email</label>
                <input className="input-style" type="email" name="email" placeholder="Email" required />
                <label for="message" className="">{texts.contactForm2}</label>
                <textarea className="input-style" name="message" required defaultValue={""} />
                <input type="hidden" name="redirect" defaultValue="https://web3forms.com/success" />
                <motion.button className="yellow contact-button" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} type="submit"> <span>{texts.ctaHome}</span></motion.button>          
            </form>

        </>
    );
}
