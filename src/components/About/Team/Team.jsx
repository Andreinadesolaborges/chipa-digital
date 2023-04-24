//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import framer motion//
import { motion } from "framer-motion";
import { Profilecard } from "../ProfileCard/ProfileCard";

//import img//
import placeholder from "../../../img/placeholder-team.png"

export const Team = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="team-container">
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="h1-big-outline">{texts.aboutTeamTitle}</motion.h1>
            <motion.h2 className="team-text">{texts.aboutTeamSub}</motion.h2>
            <div className="team-card-container">
                <Profilecard img={placeholder} alt={"placeholder"} name={"Luz Casanova"} job={texts.aboutTeamJobs} mail={"mailto:casanovaluz94@gmail.com"} link={"https://www.linkedin.com/in/luz-casanova/"} ig={"https://www.instagram.com/cationax/"}/>
                <Profilecard img={placeholder} alt={"placeholder"} name={"Andreina De Sola"} job={texts.aboutTeamJobs1} mail={"mailto:andreinadesola@gmail.com"} link={"https://www.linkedin.com/in/andreina-de-sola/"} ig={"https://www.instagram.com/andreinadesola/"}/>
                <Profilecard img={placeholder} alt={"placeholder"} name={"Luigi Casanova"} job={texts.aboutTeamJobs2} mail={"mailto:"} link={"https://www.linkedin.com/in/"} ig={"https://www.instagram.com/"}/>
            </div>
        </div>
    );
}