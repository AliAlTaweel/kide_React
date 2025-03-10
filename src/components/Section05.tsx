import '../styles/Section05.scss';
import Btns from './Btns';

const Section05 = () => {
    return (
        <section className="section05">
        <h2>Kirjailijakuvia-dokumenttisarja</h2>
        <p>KIDE tuotti Kirjailijakuvia-dokumenttisarjaa vuosina 1988–2012</p>
        <p>Sarjassa eri kirjallisuudenlajeja edustavat kotimaiset kirjailijat kertoivat työstään, vaikutteistaan ja tuotannostaan itse, kukin omalla tavallaan. Sarjassa esiteltiin sekä suomen- että ruotsinkielisiä kirjailijoita. Kirjailija-lehti aloitti dokumenttien uudelleenjulkaisemisen verkossa keväällä 2024.</p>
        <Btns title='Docunmentit-kirjailija-lehdessä'/>
        </section>
    );
    };
    export default Section05;