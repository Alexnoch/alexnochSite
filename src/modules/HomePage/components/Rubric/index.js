import React from 'react';
import { Chapter } from '../Chapter/index.js';
import  Articles from '../../../../static/images/articles.png';
import  AboutMe from '../../../../static/images/aboutme.png';
import  MyWorks from '../../../../static/images/myworks.png';
import './style.css';

export const Rubric = () =>{
    return <div className="rubric-background">
                <div className="rubric-container">
                    <div className="rubric-header">
                        <h2>Добро пожаловать!</h2>
                        <p className="rubric-header-welcomeText">
                            Сайт включает в себя несколько категорий, это — статьи, мои работы, обо мне. 
                            В каждом разделе уникальная информация из моего личного опыта, с которой 
                            я охотно поделюсь с тобой, мой дорогой друг!</p>
                    </div>
                    <div className="rubric-sections">
                        <Chapter name="Статьи" image={Articles}/>
                        <Chapter name="Обо мне" image={AboutMe}/>
                        <Chapter name="Работы" image={MyWorks}/>
                    </div>
                </div>
            </div>
}