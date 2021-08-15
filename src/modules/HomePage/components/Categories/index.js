import React from 'react';
import { SoftDeveloper } from './../SoftDeveloper';
import './style.css';
export const Categories = (props) => {


    return <div className="categories-background">
        <div className="categories-container">
            <div className="categories-container-header">
                <p className="categories-container-header-title">категории</p>
                <p className="categories-container-header-text">Выбор</p>
            </div>
            <div className="categories-container-menu">
                <button className="categories-container-menu-button">Личный опыт</button>
                <button className="categories-container-menu-button">Софт разработчика</button>
                <button className="categories-container-menu-button">Новости</button>
            </div>
            <SoftDeveloper />
        </div>
    </div>
}