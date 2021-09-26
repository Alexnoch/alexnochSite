import React from 'react';
import Image from '../../../../static/images/aboutWork_image.png';
import './style.css';

export const AboutWork = () =>{

    return<div className="aboutWork-background">
        <div className="aboutWork-container">
            <h2 className="aboutWork-header">Подход к работе</h2>
            <p className="aboutWork-titleText">Мой подход к работе заключается в создании легко адаптируемых под любые разрешения сайтов, на основе Flexbox, Grid.
            </p>
            <div className="aboutWork-main">
                <div className="aboutWork-main-text">
                <p><span className="accent">Сейчас</span> в эпоху гаджетов, стандарты и требования к сайту неизменно растут. Иструменты для их создания появляются каждый день.</p>
                <p>
                    В своих работах, я пользуюсь проверенными и популярными технологиями, прошедшие проверку временем и десятками проектов. 
                </p>
                 <p>
                    Это создаёт твёрдую почву для реализации новых возможностей на базе надёжных подходов, по-этому в моих работах можно увидеть не стандартные "фичи" 
                    которые в тренде текущего года.
                </p>
                </div>
                <div className="aboutWork-main-photo">
                    <img className="aboutWork-main-image" src={Image} />
                </div>
            </div>
        </div>
    </div>
}