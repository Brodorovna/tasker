import "./AddButton.css";
import { ReactComponent as Add } from "./add.svg";

export const AddButton = ({ onClick }) => {
  return (
    <button className="add" onClick={onClick}>
      <Add className="buttonIcon" />
    </button>
  );
};
