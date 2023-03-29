import React, { useState } from 'react';

//import language//
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";

//import motion//
import { motion } from 'framer-motion';


export const TabServiceHome = () => {
    const { texts } = useContext(LanguageContext);
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            img: 'design-icon.svg',
            tabTitle: `${texts.tabHomeS1}`,
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            img: 'mkt-icon.svg',
            tabTitle: `${texts.tabHomeS2}`,
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            img: 'com-icon.svg',
            tabTitle: `${texts.tabHomeS3}`,
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='container-tabs'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button  className='tab-button' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>
                        <img className="tab-img" src={`../img/${tab.img}`} alt="img"/>
                        {tab.tabTitle}
                        </button>
                    
                )}
            </div>
            <div className='tab-content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </motion.div>
    );
}


