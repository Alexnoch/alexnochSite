import React, {useState} from "react";
import './style.scss';

const BigArticle = (props) =>{
const { rubric, header, text, date, link } = props;

    return(
        <div className="big-article">
            <div className="big-article__content">
                <p className="big-article__rubric">{rubric}</p>
                <h2 className="big-article__header">{header}</h2>
                <p className="big-article__text">{text}</p>
                <div className="big-article__bottom">
                    <div className="big-article__date">{date}</div>
                    <a className="big-article__link" href={link}>Смотреть</a>
                </div>
            </div>
            <div className="big-article__image"></div>
        </div>
    )
}


export default BigArticle;