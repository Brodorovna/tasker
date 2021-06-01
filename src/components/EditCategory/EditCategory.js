import "./EditCategory.css";
import { ReactComponent as Edit } from "./edit.svg";

export const EditCategory = ({ onClick }) => {
  return (
    <button className="EditCategory" onClick={onClick}>
      <Edit className="editbuttonIcon" />
    </button>
  );
};
