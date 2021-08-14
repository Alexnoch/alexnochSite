import React from 'react';
import { Advantages } from '../Advantages';
import Author from '../../../../static/icons/author.png';
import Info from '../../../../static/icons/info.png';
import Darts from '../../../../static/icons/darts.png';
import './style.css';
export const AboutSite = (props) =>{


    return<div className="aboutSite-background">
        <div className="aboutSite-container">
         <Advantages image={Author} header="От автора" text="C 2019 начал погружение в сферу IT, прошел обучение  в Московской школе Nordic IT Shool,  далее десятки книг и сотни часов практики."/>
         <Advantages image={Info} header="О сайте" text="C 2019 начал погружение в сферу IT, прошел обучение  в Московской школе Nordic IT Shool,  далее десятки книг и сотни часов практики."/>
         <Advantages image={Darts} header="Цели" text="C 2019 начал погружение в сферу IT, прошел обучение  в Московской школе Nordic IT Shool,  далее десятки книг и сотни часов практики."/>
        </div>
    </div>
}
