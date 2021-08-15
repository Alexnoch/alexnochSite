import React from 'react';
import BookLogo from '../../../../static/icons/bookLogo.png';
import './style.css' ;

export const CardNews = (props) => {
    const  { image, header, text } = props;
    return<div className="card-item-container">
            <img className="card-item-container-image" src={image}/>
            <div className="card-item-container-body">
                <h4 className="card-item-container-title">{header}</h4>
                <p className="card-item-container-text">{text}</p>
            </div>
            <div className="card-item-container-footer">
                <img className="card-item-container-footer-icon" src={BookLogo} alt="BookLogo" />
                <a className="card-item-container-footer-link">Читать</a>
            </div>
        </div>
}