import '../styles/TwoImages.scss';
import image02 from '../assets/Kide-kuvat/kide-hero-image.jpg';
const TwoImages = () => {
    return (
        <div className='twoImages'>
        <div className="sec01">


        <img className='image02' src={image02} alt="image1" />
        <div className='backgroundImg'>
        </div>
        </div>
        <div className="sec02">

          
        <div className="wave-container">
            <div className="wave">
                <ul>
                    <li><a href="">toiminta</a></li>
                    <li><a href="">apurahat</a></li>
                    <li><a href="">valtuuskunta</a></li>
                </ul>

            </div>
        </div>        
        </div>
        </div>
    );
    };
export default TwoImages;