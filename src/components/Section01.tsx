
import '../styles/Section.scss';
import Btns from './Btns';
import TitleAndIcon from './TitleAndIcon';
import imageIcom from '../assets/Kide-kuvat/kide-toiminta-ikoni.svg';
type Props = {
    title: string;
}
const Nsection = (props:Props) => {
    return (
        <section className="section">
        <TitleAndIcon title={props.title} icon={imageIcom}/>
       
        <div className="textAndBtn">
            <p>Suomen Kirjailijaliitto ja Finlands svenska författareförening perustivat yhdessä Kirjallisuuden edistämiskeskus KIDEn vuonna 1986. KIDE toimii Suomen Kirjailijaliiton yhteydessä.</p>
        <p>KIDEn toiminta rahoitetaan tekijänoikeuslakiin perustuvista hyvitysvaroista, jotka ovat hyvitystä teosten kopioimisesta yksityiseen käyttöön. Hyvitysvarat jaetaan suoraan tekijöille tai heidän yhteisiin tarkoituksiinsa. Hyvitys on maksettu vuodesta 2015 alkaen valtion budjetista – aiemmin hyvitys kerättiin tallennuslaitteiden ja -alustojen myyntituloista.</p>
        <p>KIDE myöntää vuosittain kohdeapurahoja kaunokirjailijoiden työvälineisiin ja kaunokirjallisen työn edellyttämiin matkoihin.

</p>
<Btns title="apurahajärestelmään"/>
<p>KIDE tarjoaa työskentelyresidenssin suomen- ja ruotsinkielisille kaunokirjailijoille Ateenassa.</p>
<Btns title="tutustu residenssiin"/>
<p>Lisäksi KIDE toteuttaa kirjailijan ammattitaitoa ylläpitävää koulutusta. KIDEn kursseista ilmoitetaan Suomen Kirjailijaliiton ja Finlands svenska författareföreningin jäsenkirjeissä.

</p>
        </div>
        </section>
    )
}
export default Nsection; 