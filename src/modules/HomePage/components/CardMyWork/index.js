import './style.css';

export const CardMyWork = (props) =>{
    const {title, text, date } = props;


    return(
        <div className="cardWork-wrapper">
            <div className="cardWork-container">
                <div className="cardWork-image">
                    <img />
                </div>
                <div className="cardWork-aboutProject">
                    <p>о проекте</p>
                    <p>{title}</p>
                    <p>{text}</p>
                    <div className="cardWork-aboutProject-bottom">
                        <span>{date}</span>
                        <a>Смотреть</a>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}