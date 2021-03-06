import React from 'react';
import ImageTitle from '../../static/images/homepageTitle.jpg';
import { Rubric } from './components/Rubric/index.js';
import { AboutWork } from './components/AboutWork/index';
import { AboutSite } from './components/AboutSite';
import { Categories } from './components/Categories';
import { MyWork } from './components/MyWorks';
import Photos from './components/Photos/index'
import './style.css';
import Footer from './components/Footer';

 export const HomePage = (props)=>{
   
    return(
        <div>
            <div className="homepage-container">
                <img className="homepage-container-image" src={ImageTitle} />
                <div className="homepage-conitaner-absolute">
                    <div className="homepage-container-relative">
                        <div className="homepage-container-header">
                            <h1 className="homepage-container-header-title">Александр Ночь</h1>
                            <p className="homepage-container-header-skills">Сайты, дизайн, разработка</p>
                            <p className="homepage-container-header-skills">html</p>
                            <p className="homepage-container-header-skills">css</p>
                            <p className="homepage-container-header-skills">javascript</p>
                            <p className="homepage-container-header-skills">figma</p>
                        </div>
                    </div>
                </div>
            </div>
            <Rubric />
            <AboutWork />
            <AboutSite />
            <Categories />
            <MyWork />
            <Photos />
            <Footer />
        </div>
    )
}
