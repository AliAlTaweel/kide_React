import '../styles/Section06.scss';
import logo from '../assets/Kide-kuvat/kide-logo-footer.svg'
import Btns from './Btns';

const Section06 = () => {
    return (
        <section className="section06">
        <div className="leftWing">
                <img src={logo} alt="logo" />
                <p>Kohdeapurahoja</p>
                <p>Kirjailija­residenssejä</p>
                <p>Koulutusta</p>
        </div>
        <div className="rightWing">
            <h1>Kirjallisuuden edistämiskeskus KIDE toimii Suomen Kirjailijaliiton yhteydessä.</h1>
            <p>Suomen Kirjailijaliitto ry</p>
            <p>puh. 09 445 392</p>
            <p>info (at) kirjailijaliitto.fi</p>
            <p>Runeberginkatu 32 C 28, 00100 Helsinki</p>
            <Btns title='suomen kirjalilijaiitto'/>
            <Btns title='finlands sevenska författareförening'/>


        </div>
        </section>
    );
    };
    export default Section06;
