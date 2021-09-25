import React from 'react';
import SoftLogo from '../../../../static/images/softtitle.png';
import Test from '../../../../static/news/news2.png';
import { CardNews } from '../CardNews';
import './style.css';

export const SoftDeveloper = () => {

    const news = [
        {
            image:'src/static/news/news1.png',
            header:'Магия в деталях',
            text:'Вам когда нибудь предстояло выполнить разнообразную работу, которая включала в себя множество мелких подзадач?'
        },
        {
            image:'/src/static/news/news2.png',
            header:'Продуктивность',
            text:'Вам когда нибудь предстояло выполнить разнообразную работу, которая включала в себя множество мелких подзадач?'
        },
        {
            image:'/src/static/news/news3.png',
            header:'Ты теряешь время',
            text:'Вам когда нибудь предстояло выполнить разнообразную работу, которая включала в себя множество мелких подзадач?'
        },
        {
            image:'/src/static/news/news4.png',
            header:'Не беги вперёд',
            text:'Вам когда нибудь предстояло выполнить разнообразную работу, которая включала в себя множество мелких подзадач?'
        }
    ]

    return<div className="softDeveloper">
        <div className="softDeveloper-header">
            <div className="softDeveloper-header-logo">
                <img src={SoftLogo} alt="SoftLogotip" />
                {/* <img src={Test} /> */}
            </div>
            <div className="softDeveloper-header-content">
                <h4 className="softDeveloper-header-content-title" >софт разработчик</h4>
                <p className="softDeveloper-header-content-text">
                    В этом разделе я расскажу о программах
                    и утилитах которыми пользуюсь сам,
                    начинащему разработчику очень
                    важно с самого начала использовать     
                    правильный софт, это упростит скорость 
                    разработки повысит производительность
                </p>
                <div className="softDeveloper-header-content-button-container">
                    <button className="softDeveloper-header-content-button">Перейти к чтению</button>
                </div>
            </div>
        </div>
        <div className="softDeveloper-news">
            <p>Последние новости</p>
            <div className="softDeveloper-news-container">
                {news.map((item,id)=>{
                    return <CardNews key={id} image={item.image} header={item.header} text={item.text} />
                })}
            </div>
        </div>
        <div className="softDeveloper-news-container-buttons-wrapper">
            <div className="softDeveloper-news-container-buttons">
                <button className="softDeveloper-news-container-button left"></button>
                <span className="softDeveloper-news-container-num">1</span>
                <span className="softDeveloper-news-container-num">2</span>
                <span className="softDeveloper-news-container-num">3</span>
                <button className="softDeveloper-news-container-button right"></button>
            </div>
        </div>
    </div>
}