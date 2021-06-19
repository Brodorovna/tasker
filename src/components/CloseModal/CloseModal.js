import "./CloseModal.css";
import { ReactComponent as Del } from "../AddButton/add.svg";

export const CloseButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <span className="closemodal" onClick={handleClick}>
      <Del className="buttonIcon" />
    </span>
  );
};
