import '../styles/Section.scss';
import Btns from './Btns';  
import TitleAndIcon from './TitleAndIcon';
import imageSec03 from '../assets/Kide-kuvat/kide-apurahat-ikoni.svg';

type Props = {
    title: string;
}
const Section03 = (props:Props) => {
    return (
        <section className="section">
            <TitleAndIcon title={props.title} icon={imageSec03}/>
            <div className="textAndBtn">
                <p>KIDE myöntää vuosittain kohdeapurahoja kaunokirjailijoiden työvälineisiin ja kaunokirjallisen työn edellyttämiin matkoihin. Apurahojen hakuaika on vuosittain maaliskuussa ja lokakuussa.</p>
                <p>Apurahansaajan tulee toimittaa selvitys apurahan käytöstä Kirjallisuuden edistämiskeskukselle apurahajärjestelmän kautta.</p>
                <Btns title="apurahajärjestelmään"/>
            </div>
        </section>
    );
}
export default Section03;