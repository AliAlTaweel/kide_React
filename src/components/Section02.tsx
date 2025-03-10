import image01 from '../assets/Kide-kuvat/kide-infograafi.svg';
import '../styles/Section02.scss';
const Section02 = () => {
    return (
        <section className="section02">
        <h2 className='title'>Miten KIDE toimii?</h2>
        <img className='sec02Image' src={image01} alt="" />
        <p className='sec02Text'>Tähän mahdollisuus kirjoittaa selittävä kuvateksti. Tähän mahdollisuus kirjoittaa selittävä kuvateksti.</p>
        <p className='sec02Text'>Tähän mahdollisuus kirjoittaa selittävä kuvateksti. Tähän mahdollisuus kirjoittaa selittävä kuvateksti.</p>
        </section>
    );
    };  
    
    export default Section02;