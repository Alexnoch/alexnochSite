import React from "react";
import { NavLink, Route, Router, Redirect , Switch} from 'react-router-dom';
import { HomePage } from '../HomePage/main.js';
import Articles from '../Articles/main.js';
import Logo  from '../../static/icons/logo.png';
import Email from '../../static/icons/email.png';
import Git from '../../static/icons/github.png';
import Vk from '../../static/icons/vk.png';
import DropDown from '../../static/icons/dropDown.png';
import SubLogo from '../../static/icons/alexNoch.png';
import './style.css';


export const Root = () =>{
    return(
        <>
    <div className="topbar-menu">
        <div className="topbar-container">
            <div className="topbar-logo">
                <img src={Logo}></img>
            </div>
            <div className="topbar-menu-sections">
                <NavLink className="topbar-menu-link" to="/homePage">Главная</NavLink>
                <NavLink className="topbar-menu-link" to="/articles">Мои статьи</NavLink>
                <NavLink className="topbar-menu-link" to="/redirect">Мои работы</NavLink>
                <NavLink className="topbar-menu-link" to="/redirect">Прайс-лист</NavLink>
            </div>
            <div className="topbar-menu-social">
                <span className="topbar-menu-social-contactMe">Связь со мной</span>
                <img className="topbar-menu-social-icons" src={Vk} />
                <img className="topbar-menu-social-icons"src={Email} />
                <img className="topbar-menu-social-icons"src={Git} />
            </div>
            <div className="topbar-menu-sublogo">
                <img src={SubLogo} alt="Logotipe"/>
            </div>
            <div className="topbar-menu-dropdown-menu-container">
                <img src={DropDown} alt="Dropdown menu"/>
            </div>
        </div>
    </div>
     <Switch>
         <Route exact path="/">
             <Redirect to="/homePage" />
         </Route>
         <Route path="/homePage">
             <HomePage />
         </Route>
         <Route path="/articles">
             <Articles />
         </Route>
    </Switch>  
    </>
    )
}
