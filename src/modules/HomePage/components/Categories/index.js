import React, { useState } from 'react';
import classnames from 'classnames';
import { SoftDeveloper } from './../SoftDeveloper';
import './style.css';
export const Categories = (props) => {

const [ activeCategory, setActiveCategory ] = useState('SoftDeveloper');

    return <div className="categories-background">
        <div className="categories-container">
            <div className="categories-container-header">
                <p className="categories-container-header-title">категории</p>
                <p className="categories-container-header-text">Выбор</p>
            </div>
            <div className="categories-container-menu">
                <button className={classnames("categories-container-menu-button", {categories_active:activeCategory === 'PersonalExp'})} onClick={()=>setActiveCategory('PersonalExp')}>Личный опыт</button>
                <button className={classnames("categories-container-menu-button", {categories_active:activeCategory === 'SoftDeveloper'})} onClick={()=>setActiveCategory('SoftDeveloper')}>Софт разработчика</button>
                <button className={classnames("categories-container-menu-button", {categories_active:activeCategory === 'Category_news'})} onClick={()=>setActiveCategory('PersonalExp')}>Новости</button>
            </div>
            {activeCategory === 'SoftDeveloper' ? <SoftDeveloper /> : '' }
        </div>
    </div>
}