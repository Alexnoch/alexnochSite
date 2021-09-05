import { CardMyWork } from './../CardMyWork';
import './style.css';



export const MyWork = () => {
    const title = 'First Landing Page';
    const text = `Мой первый проект созданный на начальном уровне, первый сайт портфолио, который имел возможность попасть в сеть
    Ничего особенного,  красивый background, минимум фото и информации. `
    const date = 'Март 2021';
    return(
        <div className="myWork-wrapper">
            <div className="myWork-container">
                <div className="myWork-container-header">
                    <p className="myWork-container-header-title">мои работы</p>
                    <p className="myWork-container-header-text">В этом разделе преставлены мои работы, от самых простых до самых сложных. </p>
                </div>
                <div className="myWork-container-cards">
                    <CardMyWork title={title} text={text} date={date} />
                </div>
            </div>
            
        </div>
    )
}