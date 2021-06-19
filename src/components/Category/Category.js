import "./Category.css";
import { EditingContext } from "../../providers/EditingProvider";
import { useContext } from "react";

export const categoryKeys = {
  title: "title",
  color: "color",
  id: "id",
};

export const Category = ({
  id,
  title,
  color,
  setActiveCategoryId,
  isActive,
  deleteCategory,
}) => {
  const handleClick = () => {
    setActiveCategoryId(!isActive ? id : undefined);
  };
  const handleDeleteCategory = () => {
    deleteCategory(id);
  };

  const { isEditing } = useContext(EditingContext);

  return (
    <div className="category-wrapper">
      {!isEditing ? (
        <div></div>
      ) : (
        <div className="delete" onClick={handleDeleteCategory}></div>
      )}
      <div
        className="single-category"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <div className="category__title">{title}</div>
      </div>
    </div>
  );
};
