import React from 'react';
import { NavLink } from 'react-router-dom';
import  BigArticle  from './components/BigArticle/index.js'
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
          <div className="articles__main-container">
            <div className="articles__sidebar"></div>
            <div className="articles__content">
              <BigArticle 
                rubric="Webpack"
                header="Настройка плагинов"
                text="
                Мой первый проект созданный на начальном уровне,
                первый сайт портфолио, который имел возможность попасть в сеть)
                Ничего особенного,красивый background, минимум фото и информации.
                "
                date="21 марта"
                link="#"
              />  
            </div>  
          </div>        
      </div>
    </div>
  )
}

export default Articles;