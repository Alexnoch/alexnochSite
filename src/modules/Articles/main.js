import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Articles = () =>{



  return(
    <div className="articles-wrapper">
      <div className="articles-container">
          <div className="articles-header">
            <h2 className="articles-header-title">Статьи</h2>
            <p className="articles-header-text">Выбор</p>  
          </div>
          <div className="articles-main-menu">
          <NavLink className="articles-navLink" to="/language">Языки программирования</NavLink>
          <NavLink className="articles-navLink" to="/other">Разное</NavLink>
          <NavLink className="articles-navLink lastRightMargin" to="/guides">Обучающие гайды</NavLink>
          </div>        
      </div>
    </div>
  )
}

export default Articles;