import React from 'react';
import classnames from 'classnames';
import './style.css';

export const Chapter = ({image, name, last }) =>{

    return<div className={classnames("rubric-chapter-container",{lastRightMargin:last})}>
            <div className="rubric-chapter-container-position">
                <h4 className="rubric-chapter-container-header">{name}</h4>
                <p className="rubric-chapter-container-link">Перейти в раздел</p>
                <img className="rubric-chapter-container-image" src={image} />
            </div>
         </div>
}