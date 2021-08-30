import { CardMyWork } from './../CardMyWork';
import './style.css'



export const MyWork = () => {


    return(
        <div className="myWork-wrapper">
            <div className="myWork-container">
                <div className="myWork-container-header">
                    <p className="myWork-container-header-title">мои работы</p>
                    <p className="myWork-container-header-text">В этом разделе преставлены мои работы, от самых простых до самых сложных. </p>
                </div>
                <div className="myWork-container-cards">
                    <CardMyWork />
                </div>
            </div>
            
        </div>
    )
}