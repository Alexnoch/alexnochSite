 import ImageTitle from '../../static/images/homepageTitle.jpg';
 import './style.css';
 const HomePage = (props)=>{
    const { text } = props;

    return(
        <div className="homepage-container">
            <img className="homepage-container-image" src={ImageTitle} />
            {text}
        </div>
    )
}


export default HomePage;