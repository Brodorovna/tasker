import "./AddCategoryButton.css";
import { ReactComponent as Add } from "./add.svg";

export const AddCategoryButton = ({ onClick }) => {
  return (
    <button className="addCategory" onClick={onClick}>
      <Add className="buttonIcon" />
    </button>
  );
};
