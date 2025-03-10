import '../styles/Section.scss';
import sec04Icon from '../assets/Kide-kuvat/kide-valtuuskunta-ikoni.svg';
import TitleAndIcon from './TitleAndIcon';
import Btns from './Btns';
type Props = {
    title: string;
}
const Section04 = (props:Props) => {
    return (
        <section className="section">
        <TitleAndIcon title={props.title} icon={sec04Icon}/>
        <div className="textAndBtn">
                <p>Kirjallisuuden edistämiskeskus KIDEn toimintaa hallinnoi Suomen Kirjailijaliiton johtokunnan valitsema valtuuskunta.</p>
                <p>KIDEn valtuuskunta:</p>
                <p>Anne Helttunen <br/>
                Ville Hytönen<br/>
                Katja Kallio<br/>
                Pajtim Statovci<br/>
                Philip Teir</p>
                <p>Valtuuskunnan sihteerinä toimii Suomen Kirjailijaliiton toiminnanjohtaja.</p>
            </div>

        </section>
    );
    };
    export default Section04;