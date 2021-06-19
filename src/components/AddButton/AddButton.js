import "./AddButton.css";
import { ReactComponent as Add } from "./add.svg";

export const AddButton = ({ onClick, isActive }) => {
  return (
    <button className={isActive ? "add--active" : "add"} onClick={onClick}>
      <Add className="buttonIcon" />
    </button>
  );
};
