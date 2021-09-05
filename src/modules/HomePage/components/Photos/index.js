import p1 from './../../../../static/images/p1.jpg';
import p2 from './../../../../static/images/p2.jpg';
import p3 from './../../../../static/images/p3.jpg';
import p4 from './../../../../static/images/p4.jpg';
import p5 from './../../../../static/images/p5.jpg';
import p6 from './../../../../static/images/p6.jpg';
import './style.css';

const Photos = () =>{


    return(
        <div className="photos-wrapper">
            <div className="photos-container">
                <div className="photos-header-container">
                    <p className="photos-header-title">фото</p>
                    <p className="photos-header-text">Здесь, представленны фотографии которые я использовал в своих проектах, наиболее красивые и отретушированные, вообщем — приятного просмотра!</p>
                </div>
                <div className="photos-image-container">
                    <img src={p1} />
                    <img src={p2} />
                    <img src={p3} />
                    <img src={p4} />
                    <img src={p5} />
                    <img src={p6} />
                    </div>
                  
                </div>
            </div>
       
    )
}


export default Photos;