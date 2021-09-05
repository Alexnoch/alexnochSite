import React from 'react';
import CardWork from '../../../../static/images/cardWork1.png';
import Eye from '../../../../static/icons/eyes.png';
import './style.css';

export const CardMyWork = (props) =>{
    const {title, text, date } = props;


    return(
        <div className="cardWork-wrapper">
            <div className="cardWork-container">
                <div className="cardWork-image-container">
                    <img className="cardWork-image" src={CardWork}/>
                </div>
                <div className="cardWork-aboutProject">
                    <p className="cardWork-aboutProject-title">о проекте</p>
                    <p className="cardWork-aboutProject-name">{title}</p>
                    <p className="cardWork-aboutProject-desc">{text}</p>
                    <div className="cardWork-aboutProject-bottom">
                        <span className="cardWork-aboutProject-bottom-date">{date}</span>
                        <a className="cardWork-aboutProject-bottom-link">Смотреть</a>
                        <img src={Eye}/>
                    </div>
                </div>
            </div>
        </div>
    )
}