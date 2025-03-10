import { FC } from "react";
import "../styles/Btns.scss";

type BtnsProps = {
  title: string;
  ExLink: string;
};

const Btns: FC<BtnsProps> = ({ title, ExLink }) => {
  const handleClick = () => {
    const validURL = ExLink.startsWith("http") ? ExLink : `https://${ExLink}`;

    window.location.href = validURL; 
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {title}<span className="arrow">→</span>
      </button>
    </div>
  );
};

export default Btns;