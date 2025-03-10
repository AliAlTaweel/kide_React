import '../styles/Header.scss';
import '../App.css'
import imag01 from '../assets/Kide-kuvat/kide-logo.svg';

const Header = () => {
    return (
        <header className='container'>
        <div className="lang">
            <p><a>suomi</a></p>
            <p><a>ruotse</a></p>

        </div>
        <img src={imag01} alt="logo" />
        <div className="text">
        <h1>Kirjallisuuden edistämiskeskus KIDE</h1>
        <p>Tähän voi toteuttaa vain ingressikentän ”KIDE pähkinänkuoressa”</p>
        </div>
        </header>
    );
    }
    export default Header;