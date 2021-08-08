import React from 'react';
import './style.css';

export const Chapter = ({image, name }) =>{

    return<div className="rubric-chapter-container">
            <h4 className="rubric-chapter-container-header">{name}</h4>
            <p>Перейти в раздел</p>
            <img className="rubric-chapter-container-image" src={image} />
         </div>
}