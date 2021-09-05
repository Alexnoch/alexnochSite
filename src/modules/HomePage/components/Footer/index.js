import './style.css';



const Footer = () =>{
    return(
        <div>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-contacts">
                        <p className="footer-categories">Контакты</p>
                        <a className="footer-links">jacksparrow-111111@mail.ru</a>
                        <a className="footer-links">vk.com/alexnoch</a>
                        <a className="footer-links">telegram.com/alexnoch</a>
                        <div className="footer-social-container">
                            <img />
                            <img />
                            <img />
                        </div>
                    </div>
                    <div className="footer-map">
                        <p className="footer-categories">Карта сайта</p>
                        <a className="footer-links">Главная страница</a>
                        <a className="footer-links">Мои работы</a>
                        <a className="footer-links">Мои статьи</a>
                        <a className="footer-links">Контакты</a>
                    </div>
                    <div className="footer-labels">
                        <p className="footer-categories">метки</p>
                    </div>
                </div>
            </div>
            <div className="card-item-copyright">
                <p>сайт разработан в 2021г. Все права защищены. Копирование сайта запрещено.</p>
                <img />
            </div>
        </div>
    )
}

export default Footer;