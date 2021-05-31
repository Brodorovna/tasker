import "./CloseModal.css";
import { ReactComponent as Del } from "../AddButton/add.svg";

export const CloseButton = ({ onClick }) => {
  return (
    <span className="closemodal" onClick={onClick}>
      <Del className="buttonIcon" />
    </span>
  );
};
