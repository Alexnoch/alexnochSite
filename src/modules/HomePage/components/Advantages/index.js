import React from 'react';
import './style.css';

export const Advantages = (props) => {
    const { image, header, text } = props;
    return<div className="aboutSite-container-item">
                <img src={image} />
                <p  className="aboutSite-container-header">{header}</p>
                <p  className="aboutSite-container-text">{text}</p>
            </div>
}