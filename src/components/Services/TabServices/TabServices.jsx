import React, { useState } from 'react';

//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import motion//
import { motion } from 'framer-motion';

//import Link//
import { Link } from 'react-router-dom';



export const Tabservices = () => {
    const { texts } = useContext(LanguageContext);
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            img: 'design-icon.svg',
            tabTitle: `${texts.tabHomeS1}`,
            img1: '1.svg',
            title: `${texts.tabDesignT}`,
            content: `${texts.tabDesignTx}`,
            img2: '2.svg',
            title2: `${texts.tabDesignT2}`,
            content2: `${texts.tabDesignT2x}`,
            titleS2: `${texts.servicesDesignTitle}`,
            contentS2one: `${texts.servicesDesignCopy}`,
            contentS2two: `${texts.servicesDesignCopy2}`,
            imgS2: 'card-service.png',
            cta: `${texts.servicesCTA}`,
        },
        {
            id: 2,
            img: 'mkt-icon.svg',
            tabTitle: `${texts.tabHomeS2}`,
            img1: '1.svg',
            title: `${texts.tabMarketingT}`,
            content: `${texts.tabMarketingTx}`,
            img2: '2.svg',
            title2: `${texts.tabMarketingT2}`,
            content2: `${texts.tabMarketingT2x}`,
            titleS2: `${texts.servicesDesignTitle}`,
            contentS2one: `${texts.servicesDesignCopy}`,
            contentS2two: `${texts.servicesDesignCopy2}`,
            imgS2: 'card-service.png',
            cta: `${texts.servicesCTA}`,
        },
        {
            id: 3,
            img: 'com-icon.svg',
            tabTitle: `${texts.tabHomeS3}`,
            img1: '1.svg',
            title: `${texts.tabCommT}`,
            content: `${texts.tabCommTx}`,
            img2: '2.svg',
            title2: `${texts.tabCommT2}`,
            content2: `${texts.tabCommT2x}`,
            titleS2: `${texts.servicesDesignTitle}`,
            contentS2one: `${texts.servicesDesignCopy}`,
            contentS2two: `${texts.servicesDesignCopy2}`,
            imgS2: 'card-service.png',
            cta: `${texts.servicesCTA}`,
        
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='container-tabs'>
                <div className='tabs'>
                    {tabs.map((tab, i) =>
                        <button className='tab-button' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>
                            <img className="tab-img" src={`../img/${tab.img}`} alt="img" />
                            {tab.tabTitle}
                        </button>

                    )}
                </div>
                <div className='tab-content'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` &&
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>
                                    <img className="number-img" src={`../img/${tab.img1}`} alt="img" />
                                    <h2 className='tab-content-title'>{tab.title}</h2>
                                    <p>{tab.content}</p>
                                    <img className="number-img" src={`../img/${tab.img2}`} alt="img" />
                                    <h2 className='tab-content-title'>{tab.title2}</h2>
                                    <p>{tab.content2}</p>
                                </motion.div>}
                        </div>
                    )}
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="services-detail-container">
           {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className="section-service">
                                <h2 className="bold service-cont-2">{tab.titleS2}</h2>
                                <div className="service-content">
                                    <h4 className="service-cont">{tab.contentS2one}</h4>
                                    <div className="service-cont"><img className="service-img" src={`../img/${tab.imgS2}`} alt="img" /></div>
                                </div>
                                <h4 className="service-cont-2">{tab.contentS2two}</h4>
                                <h2 className="bold service-cont-2 margin-cta">{tab.cta}</h2>
                                <Link to={"/contact"}><motion.button className="yellow" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}> <span>{texts.ctaHome}</span></motion.button></Link>
                            </motion.div>}
                    </div>
                )}

            </motion.div>
        </>
    );
}



