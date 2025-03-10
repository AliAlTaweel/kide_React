
import '../styles/Section.scss'
type Props = {
    title: string;
    icon: string;
}
const TitleAndIcon = (props:Props) => {
    return (
        <div className="tileAndIcon">
            <h2>{props.title}</h2>
            <img className="icon" src={props.icon} alt="icon" />
        </div>
    )
}
export default TitleAndIcon;